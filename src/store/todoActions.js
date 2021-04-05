// Action Types
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const REORDER_TODOS = "REORDER_TODOS";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
const updateTodo = (id, data) => {
  return {
    type: UPDATE_TODO,
    payload: { id, data },
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: { id },
  };
};
const reorderTodos = (todos) => {
  return {
    type: REORDER_TODOS,
    payload: todos,
  };
};

export { addTodo, updateTodo, deleteTodo, completeTodo, reorderTodos };
