export type Todo = {
  id: string;
  data: string;
  isChecked: boolean;
};

export type AppState = {
  todos: Todo[];
};

export type Actions<T> = {
  type: string;
  payload: T;
};
