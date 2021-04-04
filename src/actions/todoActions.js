const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};
const updateTodo = (id, newValue) => {
  return {
    type: "UPDATE_TODO",
    payload: { id, newValue },
  };
};
const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      todoId: id,
    },
  };
};
const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    payload: { id: id },
  };
};
const reorderTodos = (todos) => {
  return {
    type: "REORDER_TODOS",
    payload: todos,
  };
};

export { addTodo, updateTodo, deleteTodo, completeTodo, reorderTodos };
