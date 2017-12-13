export type Action = Fetch | Response;

export interface Fetch {
  type: Actions.Fetch;
}
export interface Response {
  type: Actions.Response;
}

/***** Do not edit below this line *****/
export const enum Actions {
  Fetch = "create-actions/Fetch",
  Response = "create-actions/Response",
}
