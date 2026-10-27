import React from "react";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  return (
    <div className={styles.wrapper} role="search">
      <input
        name="album"
        type="search"
        aria-label="Search"
        className={styles.search}
        placeholder={placeholder}
      />
      <button className={styles.searchButton} type="button" aria-label="Search">
        Search
      </button>
    </div>
  );
}

export default Search;
