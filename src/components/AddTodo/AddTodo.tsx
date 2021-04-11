import React, { useState } from "react";
import { nanoid } from "nanoid";
import { addTodo as addTodoAction } from "../../redux/todoActions";
import { useDispatch } from "react-redux";
import {
  Container,
  Form,
  TextInput,
  AddTodoButton,
  FormErrorText,
} from "./AddTodo.style";

const AddTodo: React.FC = () => {
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

  return (
    <Container>
      <Form>
        <div>
          <TextInput
            type="text"
            id="newTodo"
            name="newTodo"
            placeholder="Add new todo"
            value={newTodo || ""}
            onChange={savingNewTodo}
          />
          {formError && <FormErrorText>{formError}</FormErrorText>}
        </div>

        <AddTodoButton onClick={addTodo}>+</AddTodoButton>
      </Form>
    </Container>
  );
};

export default AddTodo;
