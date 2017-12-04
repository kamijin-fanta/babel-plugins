export type Action = Fetch | Response;
export interface Fetch {
  type: FETCH;
}
export interface Response {
  type: RESPONSE;
}

/***** Do not edit below this line *****/
export const FETCH = "FETCH";
export type FETCH = typeof FETCH;
export const RESPONSE = "RESPONSE";
export type RESPONSE = typeof RESPONSE;
export const Actions = {
  FETCH,
  RESPONSE
};
