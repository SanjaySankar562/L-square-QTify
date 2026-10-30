import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  // Introductory banner combines the service headline with its artwork.
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          className={styles.heroImage}
          src={require("../../assets/vibrating-headphone 1.png")}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
