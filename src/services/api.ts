import { ICandidate } from "src/types";
import { getCandidatesFromLS } from "./localStorage";

export async function getCandidatesApi(): Promise<ICandidate[]> {
  const res = await fetch("src/public/data/candidates.json");
  const candidatesFromApi: ICandidate[] = await res.json();
  
  await sleep(1000);

  const candidatesFromLocalStorage = getCandidatesFromLS();
  const candidatesFromApiWithIdx = candidatesFromApi.map((candidate, index) => ({ ...candidate, id: index}));
  return[...candidatesFromLocalStorage, ...candidatesFromApiWithIdx];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
