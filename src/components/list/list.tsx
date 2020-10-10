import React from "react";

import { CandidateListItem } from "./blocks/candidateListItem";
import { ICandidate } from "src/types";
import { ItemSkeleton } from "./blocks/itemSkeleton";

interface IListViewProps {
  list: ICandidate[];
  isLoading: boolean;
}

function ListView({ list, isLoading }: IListViewProps) {
  const renderSkeletons = () => {
    return Array.from({ length: 5 }).map((_, i) => <ItemSkeleton key={i} />);
  };

  const renderListItem = (candidate: ICandidate) => {
    return <CandidateListItem candidate={candidate} key={candidate.id} />;
  };

  if (isLoading) {
    return <>{renderSkeletons()}</>;
  }

  return <>{list.map((candidate) => renderListItem(candidate))} </>;
}

export default React.memo(ListView);
