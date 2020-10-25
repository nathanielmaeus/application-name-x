import { getCandidatesApi } from "src/services/api";
import {
  deleteCandidateFromLS,
  saveCandidatesToLS,
} from "src/services/localStorage";

import {
  $candidates,
  changeStatusCandidate,
  removeCandidate,
  saveCandidate,
  $status,
  getCandidatesFx,
  $error,
} from "./";
import { stepsDictionary, STEPS, STATUS } from "./types";

getCandidatesFx.use(getCandidatesApi);

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

$candidates.on(removeCandidate, (candidates, id) => {
  deleteCandidateFromLS(id);
  return candidates.filter((candidate) => candidate.id !== id);
});

$candidates.on(saveCandidate, (_, candidate) => {
  saveCandidatesToLS(candidate);
});

$status.on(getCandidatesFx, () => STATUS.loading);

$candidates.on(getCandidatesFx.doneData, (_, result) => [...result]);
$status.on(getCandidatesFx.done, () => STATUS.loaded);

$candidates.on(getCandidatesFx.fail, () => []);
$error.on(getCandidatesFx.fail, () => "Error");
$status.on(getCandidatesFx.fail, () => STATUS.failed);
