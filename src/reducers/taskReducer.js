const todoReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state + 1;
    case "DELETE_TASK":
      return state - 1;
    default:
      return state;
  }
};

export default todoReducer;
