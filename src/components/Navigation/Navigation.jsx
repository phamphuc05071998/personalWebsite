import React from "react";
import styles from "./Navigation.module.scss";
import Typewriter from "typewriter-effect";
const Navigation = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.headerHeading}>
        Phạm Xuân Phúc <span> <Typewriter
          options={{
            strings: ["Front End Developer"],
            autoStart: true,
            loop: true,
          }}
        /></span>
      </h3>
      <input className={styles.headerButton} type="checkbox" id="navbar" />
      <label className={styles.headerLabel} htmlFor="navbar">
        <span className={styles.headerIcon}>&nbsp;</span>
      </label>
      <nav className={styles.headerNavbar}>
        <ul className={styles.headerList}>
          <li className={styles.headerItem}>
            <a className={styles.headerLink} href="#">
              Về tôi
            </a>
          </li>
          <li className={styles.headerItem}>
            <a className={styles.headerLink} href="#">
              Hồ sơ
            </a>
          </li>
          <li className={styles.headerItem}>
            <a className={styles.headerLink} href="#">
              Dự án
            </a>
          </li>
          <li className={styles.headerItem}>
            <a className={styles.headerLink} href="#">
              Liên hệ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
