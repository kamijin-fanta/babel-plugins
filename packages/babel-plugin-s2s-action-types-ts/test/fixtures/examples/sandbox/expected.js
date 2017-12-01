export type Action = Foo | Bar | Fuga;
export interface Foo {
  type: FOO;
}
export interface Bar {
  type: BAR;
}
export interface Fuga {
  type: FUGA;
}

/***** Do not edit below this line *****/
export const FOO = "FOO";
export type FOO = typeof FOO;
export const BAR = "BAR";
export type BAR = typeof BAR;
export const FUGA = "FUGA";
export type FUGA = typeof FUGA;
export const Actions = {
  FOO,
  BAR,
  FUGA
};
