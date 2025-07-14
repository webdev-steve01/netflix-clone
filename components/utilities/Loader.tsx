import React from "react";
import styles from "./loader.module.css"

function Loader() {
  return (
    <div className="h-screen relative">
      <div className={`${styles.loader}`}>
        <div className={`${styles.justify_content_center} ${styles.jimu_primary_loading}`}></div>
      </div>
    </div>
  );
}

export default Loader;
