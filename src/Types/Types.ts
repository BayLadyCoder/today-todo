export type TodoType = {
  id: string;
  data: string;
  isChecked: boolean;
};

export type TodoListState = {
  todos: TodoType[];
  tasksDone: number;
};

export type AppState = {
  todoList: TodoListState;
};
