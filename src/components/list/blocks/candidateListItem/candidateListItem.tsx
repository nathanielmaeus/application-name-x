import React, { useState, useCallback } from "react";
import { ICandidate } from "src/types";
import cls from "classnames";

import styles from "./candidateListItem.scss";
import { AdditionActions } from "../additionActions";
import { changeStatusCandidate, removeCandidate } from "src/model";

interface ICandidateListItemProps {
  candidate: ICandidate;
}

function CandidateListItem({ candidate }: ICandidateListItemProps) {
  const [withError, setWithError] = useState(false);

  const getProgressClass = () => {
    if (!candidate.progress) {
      return styles.low;
    }

    if (candidate.progress > 50) {
      return styles.high;
    }

    if (candidate.progress > 20) {
      return styles.middle;
    }

    return styles.low;
  };

  const handleErrorLoad = () => {
    setWithError(true);
  };

  const handleChangeStatus = useCallback(() => {
    changeStatusCandidate(candidate.id);
  }, []);

  const handleDelete = useCallback(() => {
    removeCandidate(candidate.id);
  }, []);

  return (
    <div className={styles.container} data-locator="list-item">
      <div className={styles.about}>
        <div className={styles.wrapper}>
          <div
            className={cls(styles.avatar, { [styles.withError]: withError })}
          >
            <img onError={handleErrorLoad} src={candidate.avatar}></img>
          </div>
          <div className={styles.textInfo}>
            <div className={styles.fullName}>{candidate.fullName}</div>
            <div className={styles.email}>{candidate.email}</div>
          </div>
        </div>
        <div className={cls(styles.progress, getProgressClass())}>
            {candidate.progress || 0} %
        </div>
      </div>
      <div className={styles.status}>{candidate.state}</div>
      <div className={styles.footer}>
        <div className={cls(styles.applied, [styles[candidate.applied_on]])}>
          Applied on {candidate.applied_on}
        </div>
        <AdditionActions
          onMoveCandidate={handleChangeStatus}
          onDeleteCandidate={handleDelete}
        />
      </div>
    </div>
  );
}

export default CandidateListItem;
