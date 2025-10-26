import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
      <p className={styles.text}>Loading more photos...</p>
    </div>
  );
};

export default Loader;
