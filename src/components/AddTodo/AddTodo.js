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

  const savingNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    addTodoAction({ id: nanoid(), data: newTodo, isChecked: false });
    addTaskAction();
    setNewTodo("");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <input
          style={styles.textInput}
          type="text"
          id="newTodo"
          name="newTodo"
          placeholder="Add todo"
          value={newTodo || ""}
          onChange={savingNewTodo}
        />

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
    justifyContent: "space-around",
    width: "80%",
  },
  textInput: {
    padding: "10px",
    width: "300px",
    marginRight: "10px",
    fontSize: "20px",
    border: "2px solid #ff9ca9",
    borderRadius: "5px",
    color: "#303030",
  },
  addTodoButton: {
    backgroundColor: "#ff4d64",
    color: "#ffffff",
    fontSize: "30px",
    minWidth: "55px",
    minHeight: "50px",
    padding: "0",
    borderRadius: "50%",
    border: "1px solid #ff3650",
  },
};

export default AddTodo;
