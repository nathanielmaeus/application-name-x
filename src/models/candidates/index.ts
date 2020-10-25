import {
  createStore,
  createEffect,
  createStoreObject,
  createEvent,
} from "effector";
import { ICandidate } from "src/types";
import { STATUS } from "./types";

export const $candidates = createStore<ICandidate[]>([]);
export const $status = createStore<STATUS>(STATUS.initial);
export const $error = createStore<string | null>(null);

export const changeStatusCandidate = createEvent<number>();
export const removeCandidate = createEvent<number>();
export const saveCandidate = createEvent<ICandidate>();

export const getCandidatesFx = createEffect<void, ICandidate[], string>();

export const $candidatesStore = createStoreObject({
  candidates: $candidates,
  status: $status,
  error: $error,
});
