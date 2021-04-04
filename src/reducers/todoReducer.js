const initialState = [
  { id: "1", data: "Sleep early", isChecked: false },
  { id: "2", data: "Learn something new", isChecked: false },
  { id: "3", data: "Buy grocery", isChecked: false },
  { id: "4", data: "Feed the cats", isChecked: false },
];

const todoReducer = (todos = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...todos];
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
    case "REORDER_TODOS":
      return [...action.payload];
    default:
      return todos;
  }
};

export default todoReducer;
