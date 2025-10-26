import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ onToggleTheme, onSearch, isDark }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) onSearch(searchTerm.trim());
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <i className="fa-solid fa-camera"></i>
        <h2>Gallery</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for photos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <button className={styles.themeToggle} onClick={onToggleTheme}>
        <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;
