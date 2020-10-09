import React from "react";

// import styles from "./list.scss";
import { CandidateListItem } from "./blocks/candidateListItem";
import { ICandidate } from "src/types";
import { ItemSkeleton } from "./blocks/itemSkeleton";

interface IListViewProps {
  list: ICandidate[];
  isLoading: boolean;
}

function ListView({ list, isLoading }: IListViewProps) {
  const renderSkeleton = () => {
    return Array.from({ length: 5 }).map(() => <ItemSkeleton />);
  };

  const renderListItem = (candidate: ICandidate) => {
    return <CandidateListItem candidate={candidate} key={candidate.id} />;
  };

  if (isLoading) {
    return <>{renderSkeleton()}</>;
  }

  return <>{list.map((candidate) => renderListItem(candidate))} </>;
}

export default React.memo(ListView);
