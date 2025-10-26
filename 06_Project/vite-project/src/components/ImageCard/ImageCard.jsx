import React, { useState } from "react";
import styles from "./ImageCard.module.css";
import { FaHeart, FaDownload } from "react-icons/fa";

const ImageCard = ({ image, accessKey }) => {
  const [liked, setLiked] = useState(false);

  // 📥 Download Full HD image (use Unsplash download_location to track + get final URL)
  const handleDownload = async (e) => {
    e.stopPropagation(); // prevent any parent click
    try {
      // Prefer direct download link or full URL as a fallback
      let downloadUrl = image.links?.download || image.urls?.full || image.urls?.regular;

      if (image.links?.download_location && accessKey) {
        // Unsplash requires hitting the download_location to register the download and it returns a `url`
        const dlRes = await fetch(`${image.links.download_location}?client_id=${accessKey}`);
        if (dlRes.ok) {
          const dlData = await dlRes.json();
          if (dlData.url) downloadUrl = dlData.url;
        }
      }

      // Fetch the final image as a blob
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error(`Download failed: ${response.status}`);
      const blob = await response.blob();

      // Create temp link for download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Cleanup
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("❌ Download failed:", error);
      // fallback: open the image details page so user can save manually
      if (image.links?.html) window.open(image.links.html, "_blank");
    }
  };

  const handleFav = (e) => {
    e.stopPropagation();
    setLiked((v) => !v);
  };

  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls?.small}
        alt={image.alt_description || "Unsplash Image"}
        loading="lazy"
        className={styles.image}
      />


      {/* ❤️ Like Button (optional) */}
      <button
        className={`${styles.favBtn} ${liked ? styles.liked : ""}`}
        onClick={handleFav}
        aria-pressed={liked}
        title={liked ? "Unfavorite" : "Favorite"}
      >
        <FaHeart />
      </button>

      {/* 📥 Download Button */}
      <button className={styles.downloadBtn} onClick={handleDownload} title="Download">
        <FaDownload />
      </button>
    </div>
  );
};

export default ImageCard;
