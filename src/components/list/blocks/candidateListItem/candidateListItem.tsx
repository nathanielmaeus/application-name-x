import React, { useState } from "react";
import { ICandidate } from "src/types";
import cls from "classnames";

import styles from "./candidateListItem.scss";

interface ICandidateListItemProps {
  candidate: ICandidate;
}

function CandidateListItem({ candidate }: ICandidateListItemProps) {
  const [withError, setWithError] = useState(false);
  const handleErrorLoad = () => {
    setWithError(true);
  };

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
        <div className={styles.progress}>{candidate.progress || 0} %</div>
      </div>
      <div className={styles.status}>{candidate.state}</div>
      <div className={cls(styles.applied, [styles[candidate.applied_on]])}>
        Applied on {candidate.applied_on}
      </div>
    </div>
  );
}

export default React.memo(CandidateListItem);
