import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodoAction, addTaskAction }) => {
  // user type on textfield
  // user click add button
  // store data somewhere
  //  we store (dataText, id, isChecked)
  // display new todo below
  //
  // user click delete button
  // the todo that got clicked delete will be removed
  // (remove that todo object from the array)
  const [newTodo, setNewTodo] = useState("");
  const [formError, setFormError] = useState("");

  const savingNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo.length > 0) {
      addTodoAction({ id: nanoid(), data: newTodo, isChecked: false });
      addTaskAction();
      setNewTodo("");
      setFormError("");
    } else {
      setFormError("Please enter a task");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div>
          <input
            style={styles.textInput}
            type="text"
            id="newTodo"
            name="newTodo"
            placeholder="Add new todo"
            value={newTodo || ""}
            onChange={savingNewTodo}
          />
          {formError && (
            <p style={{ fontSize: "15px", color: "#ff3650" }}>{formError}</p>
          )}
        </div>

        <button
          style={styles.addTodoButton}
          onClick={(event) => addTodo(event)}
        >
          +
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minWidth: "300px",
  },
  textInput: {
    padding: "10px",
    minWidth: "240px",
    width: "95%",
    maxWidth: "400px",
    marginRight: "10px",
    fontSize: "19px",
    border: "2px solid #ff9ca9",
    borderRadius: "5px",
    color: "#303030",
  },
  addTodoButton: {
    backgroundColor: "#ff4d64",
    color: "#ffffff",
    fontSize: "30px",
    minWidth: "50px",
    minHeight: "50px",
    padding: "0",
    borderRadius: "50%",
    border: "1px solid #ff3650",
    alignSelf: "flex-start",
    cursor: "pointer",
  },
};

export default AddTodo;
