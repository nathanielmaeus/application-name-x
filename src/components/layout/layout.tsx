import React from "react";
import { Link } from "wouter";
import styles from "./layout.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <h1>JOIN</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link to="/candidates" className={styles.chapter}>
              Dashboard
            </Link>
          </li>
        </ul>
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default React.memo(Layout);
