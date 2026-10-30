import React from "react";
import { Link } from "react-router-dom";
import FeedbackButton from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  // The grid keeps branding, search, and the feedback action aligned.
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Link to="/">
        <FeedbackButton />
      </Link>
    </nav>
  );
}

export default Navbar;
