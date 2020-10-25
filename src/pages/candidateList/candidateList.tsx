import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { List } from "src/components/list";

import { $candidatesStore, getCandidatesFx } from "src/models/candidates";
import { STATUS } from "src/models/candidates/types";

function CandidateList() {
  const candidatesStore = useStore($candidatesStore);

  useEffect(() => {
    getCandidatesFx();
  }, []);

  return (
    <section>
      {candidatesStore.error && (
        <span data-testid="result">{candidatesStore.error}</span>
      )}
      <List
        list={candidatesStore.candidates}
        isLoading={candidatesStore.status === STATUS.loading}
      />
    </section>
  );
}

export default React.memo(CandidateList);
