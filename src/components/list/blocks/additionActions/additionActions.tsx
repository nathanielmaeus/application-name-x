import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./additionActions.scss";

interface IAdditionActionsProps {
  onDeleteCandidate: () => void;
  onMoveCandidate: () => void;
}

function AdditionActions({
  onMoveCandidate,
  onDeleteCandidate,
}: IAdditionActionsProps) {
  const [isOpened, setIsOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOverlay = useCallback(
    (e: Event) => {
      const element = e.target as Node;

      if (isOpened && !containerRef.current?.contains(element)) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOverlay);
    return () => {
      window.removeEventListener("click", handleClickOverlay);
    };
  }, [handleClickOverlay]);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleHide = () => {
    setIsOpened(false);
  };

  const handleDelete = () => {
    setIsOpened(false);
    onDeleteCandidate();
  }

  const handleMove = () => {
    setIsOpened(false);
    onMoveCandidate();
  }

  const renderActions = () => {
    return (
      <div className={styles.actionsContainer}>
        <div className={styles.action} onClick={handleDelete}>
          Delete
        </div>
        <div className={styles.action} onClick={handleMove}>
          Move to next step
        </div>
      </div>
    );
  };

  return (
    <div onMouseLeave={handleHide} className={styles.container} ref={containerRef}>
      <span onMouseEnter={handleOpen}>...</span>
      {isOpened && renderActions()}
    </div>
  );
}

export default React.memo(AdditionActions);
