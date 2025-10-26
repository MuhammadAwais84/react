import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Gallery from "./components/Gallery/Gallery";
import styles from "./App.module.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  // 🏷️ Handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setActiveCategory(selectedCategory);
    setSearchQuery(""); // ✅ Reset search when category changes
  };

  // 🔍 Handle search from navbar
  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory(""); // ✅ Reset category when searching
  };

  // 🌙 Toggle theme
  const toggleTheme = () => setIsDark((prev) => !prev);

  // 🌗 Apply dark/light theme class to body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  // 💾 Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  // 💾 Save theme on change
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={`${styles.appContainer} ${isDark ? styles.dark : ""}`}>
      {/* 🧭 Navbar */}
      <Navbar
        onToggleTheme={toggleTheme}
        onSearch={handleSearch}
        isDark={isDark}
      />

      {/* 🏷️ Category Bar */}
      <CategoryBar
        onSelectCategory={handleCategorySelect}
        activeCategory={activeCategory}
      />

      {/* 🖼️ Gallery (Search > Category > Random) */}
      <Gallery
        category={activeCategory}
        searchQuery={searchQuery}
        accessKey={accessKey}
      />
    </div>
  );
};

export default App;
