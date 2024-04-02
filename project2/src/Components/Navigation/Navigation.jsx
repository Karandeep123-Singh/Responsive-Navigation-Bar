import React from "react";
import styles from "./Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  return (
    <section className={styles.temo}>
      <nav className={styles.demo}>
        <div>
          <img
            src="logoipsum-225.svg"
            alt="logo_image"
            height="40px"
            width="40px"
          />
        </div>
        <ul className={isMobile ? styles.nav-links-mobile : styles.memo}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* <div id="mobile">
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas Fa-bars"}></i>
  </div>*/}
        <button onClick={handleToggle} className={styles.toggle}>
          Toggle
        </button>
      </nav>
    </section>
  );
};

export default Navigation;
