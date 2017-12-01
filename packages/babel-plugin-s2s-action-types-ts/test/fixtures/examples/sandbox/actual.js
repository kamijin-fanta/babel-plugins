export type Action = Foo | Bar | Fuga;
export interface Foo {
  type: FOO;
}
export interface Bar {
  type: BAR;
}


/***** Do not edit below this line *****/

export const FOO = "FOO";
export type FOO = typeof FOO;
export const BAR = "BAR";
export type BAR = typeof BAR;
export const Actions = {
  FOO,
  BAR
};
