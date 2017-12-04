export type Action = Foo | Bar | Fuga;
export interface Foo {
  type: FOO;
}
export interface Bar {
  type: BAR;
  payload: string;
}


/***** Do not edit below this line *****/

export const FOO = "examples/add-action/FOO";
export type FOO = typeof FOO;
export const BAR = "examples/add-action/BAR";
export type BAR = typeof BAR;
export const Actions = {
  FOO,
  BAR
};
