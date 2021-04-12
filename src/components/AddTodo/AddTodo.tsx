import React from "react";
import {
  Container,
  Form,
  TextInput,
  AddTodoButton,
  FormErrorText,
} from "./AddTodo.style";
import AddTodoLogic from "./AddTodo.logic";

const AddTodo: React.FC = () => {
  const { savingNewTodo, addTodo, formError, newTodo } = AddTodoLogic();

  return (
    <Container data-testid="add-todo-form">
      <Form>
        <div>
          <TextInput
            data-testid="add-todo-text-input"
            type="text"
            id="newTodo"
            name="newTodo"
            placeholder="Add new todo"
            value={newTodo || ""}
            onChange={savingNewTodo}
          />
          {formError && (
            <FormErrorText data-testid="add-todo-form-error-text">
              {formError}
            </FormErrorText>
          )}
        </div>

        <AddTodoButton data-testid="add-todo-button" onClick={addTodo}>
          +
        </AddTodoButton>
      </Form>
    </Container>
  );
};

export default AddTodo;
