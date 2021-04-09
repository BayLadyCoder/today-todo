import { TodoType } from "../Types/Types";
import {
  AddTodo,
  UpdateTodo,
  DeleteTodo,
  CompleteTodo,
  ReorderTodoList,
} from "../Types/ActionTypes";

// Action Types
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REORDER_TODO_LIST = "REORDER_TODO_LIST";

export const addTodo = (todo: TodoType): AddTodo => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const updateTodo = (id: string, data: string): UpdateTodo => {
  return {
    type: UPDATE_TODO,
    payload: { id, data },
  };
};
export const deleteTodo = (id: string): DeleteTodo => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
export const completeTodo = (id: string): CompleteTodo => {
  return {
    type: COMPLETE_TODO,
    payload: { id },
  };
};
export const reorderTodoList = (todoList: TodoType[]): ReorderTodoList => {
  return {
    type: REORDER_TODO_LIST,
    payload: todoList,
  };
};
