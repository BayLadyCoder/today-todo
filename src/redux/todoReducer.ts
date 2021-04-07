import { TodoDispatchType } from "../Types/ActionTypes";
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  REORDER_TODOS,
} from "./todoActions";

const initialState = [
  { id: "1", data: "Sleep early", isChecked: false },
  { id: "2", data: "Learn something new", isChecked: false },
  { id: "3", data: "Buy grocery", isChecked: false },
  { id: "4", data: "Feed the cats", isChecked: false },
];

const todoReducer = (state = initialState, action: TodoDispatchType) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case UPDATE_TODO:
      const newStateUpdateTodo = state.map((eachTodo) => {
        const newTodo = { ...eachTodo };

        if (newTodo.id === action.payload.id) {
          newTodo.data = action.payload.data;
        }
        return newTodo;
      });
      return newStateUpdateTodo;
    case DELETE_TODO:
      const newStateDeleteTodo = state.filter(
        (eachTodo) => eachTodo.id !== action.payload.id
      );
      return newStateDeleteTodo;
    case COMPLETE_TODO:
      const newStateCompleteTodo = state.map((todo) => {
        const newTodo = { ...todo };
        if (newTodo.id === action.payload.id) {
          newTodo.isChecked = !newTodo.isChecked;
        }
        return newTodo;
      });
      return newStateCompleteTodo;
    case REORDER_TODOS:
      return [...action.payload];
    default:
      return state;
  }
};

export default todoReducer;
