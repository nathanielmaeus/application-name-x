import React, { useEffect } from "react";
import { useStore } from 'effector-react';

import { List } from "src/components/list";

import { $candidatesStore, getCandidates, STATUS } from "src/model";


function CandidateList() {
  const candidatesStore = useStore($candidatesStore);

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <section>
      {candidatesStore.error && <span data-testid="result">{candidatesStore.error}</span>}
      <List list={candidatesStore.candidates} isLoading={candidatesStore.status === STATUS.loading}/>
    </section>
  );
}

export default React.memo(CandidateList);
