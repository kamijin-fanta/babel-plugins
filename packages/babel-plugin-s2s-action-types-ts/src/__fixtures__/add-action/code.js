export type Action = Foo | Bar | Fuga;
export interface Foo {
  type: Actions.Foo;
}
export interface Bar {
  type: Actions.Bar;
  payload: string;
}


/***** Do not edit below this line *****/

export const FOO = "add-action/FOO";
export type FOO = typeof FOO;
export const BAR = "add-action/BAR";
export type BAR = typeof BAR;
export const Actions = {
  FOO,
  BAR
};
