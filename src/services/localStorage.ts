import { ICandidate } from "src/types";

const STORAGE_KEY = "candidates";

export function getCandidatesFromLS() {
  const candidatesFromLS = localStorage.getItem(STORAGE_KEY);
  const candidates: ICandidate[] = candidatesFromLS
    ? JSON.parse(candidatesFromLS)
    : [];

  return candidates;
}

export function saveCandidatesToLS(candidate: ICandidate): void {
  const candidatesFromLS = getCandidatesFromLS();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...candidatesFromLS, candidate])
  );
}

export function deleteCandidateFromLS(id: number): void {
  const candidatesFromLS = getCandidatesFromLS();
  const filteredCandidates = candidatesFromLS.filter(
    (candidate) => candidate.id !== id
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCandidates));
}
