import React, { useState } from "react";
import { nanoid } from "nanoid";
import { addTodo as addTodoAction } from "../../redux/todoActions";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();

  const savingNewTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event: React.MouseEvent) => {
    event.preventDefault();
    if (newTodo.length > 0) {
      dispatch(
        addTodoAction({ id: nanoid(), data: newTodo, isChecked: false })
      );
      setNewTodo("");
      setFormError("");
    } else {
      setFormError("Please enter a task");
    }
  };

  return { savingNewTodo, addTodo, formError, newTodo };
};

export default AddTodo;
