import React, { useEffect, useState, useRef, useCallback } from "react";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import styles from "./Gallery.module.css";

const Gallery = ({ category, searchQuery, accessKey }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const fetchControllerRef = useRef(null);

  // 🧠 Fetch images
  const fetchImages = useCallback(async () => {
    if (!accessKey || !hasMore) return;

    // prevent overlapping fetches
    if (fetchControllerRef.current) {
      // best-effort abort previous request
      try {
        fetchControllerRef.current.abort();
      } catch {
        // ignore
      }
    }

    const controller = new AbortController();
    fetchControllerRef.current = controller;

    setLoading(true);
    try {
      const query = searchQuery || category || "random";
      const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=15&client_id=${accessKey}`;

      console.log(`📸 Fetching: ${url}`);
      const res = await fetch(url, { signal: controller.signal });

      if (!res.ok) {
        const text = await res.text();
        console.warn("⚠️ Unsplash error:", text);
        setHasMore(false);
        return;
      }

      const data = await res.json();
      const newImages = data.results || [];

      // ✅ stop when no more images from API
      if (newImages.length === 0) {
        setHasMore(false);
        return;
      }

      // append while preventing duplicates by `id`
      setImages((prev) => {
        const existingIds = new Set(prev.map((i) => i.id));
        const unique = newImages.filter((n) => !existingIds.has(n.id));
        if (unique.length === 0) {
          // nothing new to add
          return prev;
        }
        return [...prev, ...unique];
      });

      console.log(`✅ Loaded Page: ${page} (+${newImages.length} fetched)`);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("ℹ️ Fetch aborted");
      } else {
        console.error("❌ Fetch failed:", err);
      }
    } finally {
      setLoading(false);
      // clear controller if it is the current one
      if (fetchControllerRef.current === controller) fetchControllerRef.current = null;
    }
  }, [accessKey, category, searchQuery, page, hasMore]);

  // ♻️ Reset gallery on category/search change
  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
  }, [category, searchQuery]);

  // 🔄 Fetch when page changes
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // ♾️ Infinite scroll setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading && hasMore) {
          console.log("🌀 Bottom reached → next page");
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "300px" } // trigger 300px before bottom
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loading, hasMore]);

  return (
    <>
      <div className={styles.galleryContainer}>
        {images.map((img) => (
          // Use a stable key so items are not remounted when `page` changes
          <ImageCard key={img.id} image={img} accessKey={accessKey} />
        ))}
      </div>

      {loading && <Loader />}
      {!hasMore && (
        <p style={{ textAlign: "center", color: "#888", padding: "1rem" }}>
          🎉 No more images to load
        </p>
      )}

      <div ref={observerRef} className={styles.scrollObserver}></div>
    </>
  );
};

export default Gallery;
