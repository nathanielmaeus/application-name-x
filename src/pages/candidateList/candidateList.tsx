import React, { useEffect } from "react";
import { useStore } from 'effector-react';

import { List } from "src/components/list";

import styles from "./candidateList.scss";
import { $candidatesStore, getCandidates, STATUS } from "src/model";


function CandidateList() {
  const candidatesStore = useStore($candidatesStore);

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className={styles.container}>
      {candidatesStore.status === STATUS.loading && <span data-testid="loader">Loading...</span>}
      {candidatesStore.error && <span data-testid="result">{candidatesStore.error}</span>}
      <List list={candidatesStore.candidates} />
    </div>
  );
}

export default React.memo(CandidateList);
