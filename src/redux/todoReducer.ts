import { TodoDispatchType } from "../Types/ActionTypes";
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  REORDER_TODO_LIST,
} from "./todoActions";

const initialTodo = [
  { id: "1", data: "Sleep early", isChecked: false },
  { id: "2", data: "Learn something new", isChecked: false },
  { id: "3", data: "Buy grocery", isChecked: false },
  { id: "4", data: "Feed the cats", isChecked: false },
];

const initialState = {
  todos: initialTodo,
  tasksDone: 0,
};

const todoReducer = (state = initialState, action: TodoDispatchType) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case UPDATE_TODO:
      const newStateUpdateTodo = state.todos.map((eachTodo) => {
        const newTodo = { ...eachTodo };

        if (newTodo.id === action.payload.id) {
          newTodo.data = action.payload.data;
        }
        return newTodo;
      });
      return { ...state, todos: newStateUpdateTodo };
    case DELETE_TODO:
      const newStateDeleteTodo = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload.id
      );
      return { ...state, todos: newStateDeleteTodo };
    case COMPLETE_TODO:
      let newTasksDone;
      const newStateCompleteTodo = state.todos.map((todo) => {
        const newTodo = { ...todo };
        if (newTodo.id === action.payload.id) {
          newTodo.isChecked = !newTodo.isChecked;
          newTasksDone = newTodo.isChecked
            ? state.tasksDone + 1
            : state.tasksDone - 1;
        }
        return newTodo;
      });
      return { tasksDone: newTasksDone, todos: newStateCompleteTodo };
    case REORDER_TODO_LIST:
      return { ...state, todos: [...action.payload] };
    default:
      return state;
  }
};

export default todoReducer;
