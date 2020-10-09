import {
  createStore,
  createEffect,
  createStoreObject,
  createEvent,
} from "effector";
import { getCandidatesApi } from "src/services/api";
import {
  deleteCandidateFromLS,
  saveCandidatesToLS,
} from "src/services/localStorage";
import { ICandidate } from "src/types";

export enum STATUS {
  initial = "initial",
  loading = "loading",
  loaded = "loaded",
  failed = "failed",
}

const stepsDictionary = {
  SUBMITTED: "submitted",
  INREVIEW: "inreview",
  NOTAFIT: "not a fit",
};

type IStepsProcess = ["SUBMITTED", "INREVIEW", "NOTAFIT"];
const STEPS: IStepsProcess = ["SUBMITTED", "INREVIEW", "NOTAFIT"];

export const $candidates = createStore<ICandidate[]>([]);
const $status = createStore<STATUS>(STATUS.initial);
const $error = createStore<string | null>(null);

// CHANGE STATUS
export const changeStatusCandidate = createEvent<number>();

$candidates.on(changeStatusCandidate, (candidates, id) => {
  const currentCandidateIndex = candidates.findIndex(
    (newCandidate) => newCandidate.id === id
  );

  const currentStepIndex = Object.values(stepsDictionary).findIndex(
    (step) => candidates[currentCandidateIndex].state === step
  );
  const newStep = stepsDictionary[STEPS[currentStepIndex + 1]];

  candidates[currentCandidateIndex].state = newStep;
  return [...candidates];
});

// REMOVE CANDIDATE
export const removeCandidate = createEvent<number>();

$candidates.on(removeCandidate, (candidates, id) => {
  deleteCandidateFromLS(id);
  return candidates.filter((candidate) => candidate.id !== id);
});

// SAVE CANDIDATE
export const saveCandidate = createEvent<ICandidate>();

$candidates.on(saveCandidate, (candidates, candidate) => {
  saveCandidatesToLS(candidate);
});

// GET CANDIDATES

export const getCandidates = createEffect<void, ICandidate[], string>().use(
  getCandidatesApi
);

$status.on(getCandidates, () => STATUS.loading);

$candidates.on(getCandidates.done, (_, { result }) => [...result]);
$status.on(getCandidates.done, () => STATUS.loaded);

$candidates.on(getCandidates.fail, () => []);
$error.on(getCandidates.fail, () => "Error");
$status.on(getCandidates.fail, () => STATUS.failed);

export const $candidatesStore = createStoreObject({
  candidates: $candidates,
  status: $status,
  error: $error,
});
