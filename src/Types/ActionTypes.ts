import { Todo } from "./Types";

type AddTodo = {
  type: string;
  payload: Todo;
};
type UpdateTodo = {
  type: string;
  payload: { id: string; data: string };
};
type DeleteOrCompleteTodo = {
  type: string;
  payload: { id: string };
};

type ReorderTodo = {
  type: string;
  payload: Todo[];
};

export type AllActionTypes =
  | AddTodo
  | UpdateTodo
  | DeleteOrCompleteTodo
  | ReorderTodo;

export type ActionTypes<T> = T;
