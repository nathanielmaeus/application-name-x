import React from "react";
import cls from "classnames";

import styles from "./itemSkeleton.scss";

function ItemSkeleton() {
  return (
    <div className={styles.container} data-locator="list-item">
      <div className={styles.about}>
        <div className={styles.about}>
          <div className={cls(styles.avatar)}></div>
          <div className={styles.textInfo}>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
          </div>
        </div>
        <div className={cls(styles.progress)}></div>
      </div>
      <div className={styles.status}></div>
      <div className={styles.footer}>
        <div className={styles.row}></div>
      </div>
    </div>
  );
}

export default ItemSkeleton;
