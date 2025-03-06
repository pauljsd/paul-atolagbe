import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Paul Atolagbe. <br />
        All rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
