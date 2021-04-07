// Action Types
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REORDER_TODO_LIST = "REORDER_TODO_LIST";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const updateTodo = (id, data) => {
  return {
    type: UPDATE_TODO,
    payload: { id, data },
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: { id },
  };
};
export const reorderTodoList = (todoList) => {
  return {
    type: REORDER_TODO_LIST,
    payload: todoList,
  };
};
