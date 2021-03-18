const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.payload];
    case "UPDATE_TODO":
      const newStateUpdateTodo = todos.map((eachTodo) => {
        const newTodo = { ...eachTodo };
        if (newTodo.id === action.payload.id) {
          newTodo.data = action.payload.newValue;
        }
        return newTodo;
      });
      return newStateUpdateTodo;
    case "DELETE_TODO":
      const newStateDeleteTodo = todos.filter(
        (eachTodo) => eachTodo.id !== action.payload.todoId
      );
      return newStateDeleteTodo;
    case "COMPLETE_TODO":
      const newStateCompleteTodo = todos.map((todo) => {
        const newTodo = { ...todo };
        if (newTodo.id === action.payload.id) {
          newTodo.isChecked = !newTodo.isChecked;
        }
        return newTodo;
      });
      return newStateCompleteTodo;
    default:
      return todos;
  }
};

export default todoReducer;
