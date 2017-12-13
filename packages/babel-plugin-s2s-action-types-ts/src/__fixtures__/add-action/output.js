export type Action = Foo | Bar | Fuga;

export interface Foo {
  type: Actions.Foo;
}
export interface Bar {
  type: Actions.Bar;
  payload: string;
}
export interface Fuga {
  type: Actions.Fuga;
}

/***** Do not edit below this line *****/
export const enum Actions {
  Foo = "add-action/Foo",
  Bar = "add-action/Bar",
  Fuga = "add-action/Fuga",
}
