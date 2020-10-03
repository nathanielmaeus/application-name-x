import { ICandidate } from "src/types";

const STORAGE_KEY = 'candidates';

export async function getCandidatesApi(): Promise<ICandidate[]> {
  const res = await fetch("src/public/data/candidates.json");
  const candidatesFromApi: ICandidate[] = await res.json();
  await sleep(1000);

  const candidatesFromLocalStorage = getCandidatesFromLS();
  const sharedData = [...candidatesFromLocalStorage, ...candidatesFromApi];
  return sharedData;
}

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

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
