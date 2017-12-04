export type Action = FetchRequest;
export interface FetchRequest {
  type: FETCHREQUEST;
}
export interface FetchSuccess {
  type: FETCHSUCCESS;
}
export interface FetchFailure {
  type: FETCHFAILURE;
}

/***** Do not edit below this line *****/
export const FETCHREQUEST = "examples/request/FETCHREQUEST";
export type FETCHREQUEST = typeof FETCHREQUEST;
export const FETCHSUCCESS = "examples/request/FETCHSUCCESS";
export type FETCHSUCCESS = typeof FETCHSUCCESS;
export const FETCHFAILURE = "examples/request/FETCHFAILURE";
export type FETCHFAILURE = typeof FETCHFAILURE;
export const Actions = {
  FETCHREQUEST,
  FETCHSUCCESS,
  FETCHFAILURE
};
