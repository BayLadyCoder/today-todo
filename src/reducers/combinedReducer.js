import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  todos: todoReducer,
  tasks: taskReducer,
});
