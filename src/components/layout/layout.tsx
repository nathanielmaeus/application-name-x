import React from "react";
import { Link } from "react-router-dom";
import styles from "./layout.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <h1>JOIN</h1>
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
