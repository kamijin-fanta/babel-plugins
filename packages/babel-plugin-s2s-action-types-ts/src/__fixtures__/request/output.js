import fs from 'fs';

export type Action = FetchRequest;

export interface FetchRequest {
  type: FETCH_REQUEST;
}
export interface FetchSuccess {
  type: FETCH_SUCCESS;
}
export interface FetchFailure {
  type: FETCH_FAILURE;
}

/***** Do not edit below this line *****/
export const FETCH_REQUEST = "request/FETCH_REQUEST";
export type FETCH_REQUEST = typeof FETCH_REQUEST;
export const FETCH_SUCCESS = "request/FETCH_SUCCESS";
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;
export const FETCH_FAILURE = "request/FETCH_FAILURE";
export type FETCH_FAILURE = typeof FETCH_FAILURE;
export const Actions = {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
};
