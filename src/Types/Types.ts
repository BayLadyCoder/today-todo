export type TodoType = {
  id: string;
  data: string;
  isChecked: boolean;
};

export type AppState = {
  todoList: TodoType[];
};
