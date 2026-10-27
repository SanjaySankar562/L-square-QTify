import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice" />
      <button type="button">Give Feedback</button>
    </nav>
  );
}

export default Navbar;
