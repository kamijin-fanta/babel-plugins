import { Action as Container1Action } from "../examples/container1/actionTypes.ts";
import { Action as Container2Action } from "../examples/container2/actionTypes.ts";

export type Action = Container1Action | Container2Action;
