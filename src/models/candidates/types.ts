export enum STATUS {
  initial = "initial",
  loading = "loading",
  loaded = "loaded",
  failed = "failed",
}

export const stepsDictionary = {
  SUBMITTED: "submitted",
  INREVIEW: "inreview",
  NOTAFIT: "not a fit",
};

export type IStepsProcess = ["SUBMITTED", "INREVIEW", "NOTAFIT"];
export const STEPS: IStepsProcess = ["SUBMITTED", "INREVIEW", "NOTAFIT"];
