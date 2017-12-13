import fs from 'fs';

export type Action = FetchRequest;

export interface FetchRequest {
  type: Actions.FetchRequest;
}
export interface FetchSuccess {
  type: Actions.FetchSuccess;
}
export interface FetchFailure {
  type: Actions.FetchFailure;
}

/***** Do not edit below this line *****/
export const enum Actions {
  FetchRequest = "request/FetchRequest",
  FetchSuccess = "request/FetchSuccess",
  FetchFailure = "request/FetchFailure",
}