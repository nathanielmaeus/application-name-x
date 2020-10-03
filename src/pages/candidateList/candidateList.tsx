import React, { useReducer, useEffect } from "react";
import { getCandidatesApi } from "src/services/api";
import { ICandidate } from "src/types";
import { List } from "src/components/list";

import styles from "./candidateList.scss";

interface ICandidateListProps {}

interface IAction {
  type: "INIT" | "ERROR" | "SUCCESS";
  result?: ICandidate[];
}

interface IState {
  error: string | null;
  isLoading: boolean;
  result: ICandidate[];
}

const initialState: IState = {
  error: null,
  isLoading: false,
  result: [] as ICandidate[],
};

function mainReducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "INIT": {
      return {
        result: [],
        isLoading: true,
        error: null,
      };
    }
    case "SUCCESS": {
      return {
        error: null,
        isLoading: false,
        result: action.result || [],
      };
    }
    case "ERROR": {
      return {
        error: "Error",
        result: [],
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}

function CandidateList({}: React.FC<ICandidateListProps>) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "INIT" });

      try {
        const data = await getCandidatesApi();
        dispatch({ type: "SUCCESS", result: data });
      } catch (e) {
        dispatch({ type: "ERROR" });
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.container}>
      {state.isLoading && <span data-testid="loader">Loading...</span>}
      {state.error && <span data-testid="result">{state.error}</span>}
      <List list={state.result} />
    </div>
  );
}

export default CandidateList;
