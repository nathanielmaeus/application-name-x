import React from "react";

// import styles from "./list.scss";
import { CandidateListItem } from "./blocks/candidateListItem";
import { ICandidate } from "src/types";

interface IListViewProps {
  list: ICandidate[];
}

function ListView({ list }: IListViewProps) {
  const renderListItem = (candidate: ICandidate) => {
    return <CandidateListItem candidate={candidate} key={candidate.email}/>;
  };

  return (
    <section>{list.map((candidate) => renderListItem(candidate))}</section>
  );
}

export default React.memo(ListView);
