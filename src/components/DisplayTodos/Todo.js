import React, { useState } from "react";

const Todo = ({ todo, setStorage, storage }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);

  const handleDeleteTodo = (id) => {
    // delete this todo from the storage
    const newState = storage.filter((eachTodo) => eachTodo.id !== id);
    setStorage(newState);
  };

  const handleTodoCheckbox = (id) => {
    // toggle todo's isChecked
    const newState = storage.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setStorage(newState);
  };

  // if user click on edit button/icon, change from <p></p> to input textbox  DONE!!
  // user can change value in textbox , update todo data in database, DONE!!
  // user press enter (or press finish button),
  // change element back to <p></p>

  const handleOnClickEdit = () => {
    setIsOnEdit(true);
  };

  const handleOnChangeToDo = (e, id) => {
    const newState = storage.map((eachTodo) => {
      if (eachTodo.id === id) {
        eachTodo.data = e.target.value;
      }
      return eachTodo;
    });

    setStorage(newState);
  };

  const handleKeyPressEnter = (e) => {
    if (e.key === "Enter") setIsOnEdit(false);
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.checkbox}
        type="checkbox"
        name="task1"
        value={todo.data}
        checked={todo.isChecked}
        onChange={() => handleTodoCheckbox(todo.id)}
      />
      <div style={styles.todoDataContainer} onClick={() => handleOnClickEdit()}>
        {isOnEdit ? (
          <input
            type="text"
            value={todo.data}
            onChange={(e) => handleOnChangeToDo(e, todo.id)}
            onKeyDown={(e) => handleKeyPressEnter(e)}
          />
        ) : (
          <p
            style={{
              ...styles.todoData,
              textDecoration: todo.isChecked ? "line-through" : "none",
            }}
          >
            {todo.data}
          </p>
        )}
      </div>

      <button
        onClick={() => handleDeleteTodo(todo.id)}
        style={styles.deleteButton}
      >
        X
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 30px",
    borderBottom: "1px solid #ededed",
  },
  checkbox: {
    backgroundColor: "pink",
    fontSize: "20px",
  },
  todoDataContainer: {
    width: "100%",
    margin: "0 15px",
    padding: "15px",
  },
  todoData: {
    fontSize: "18px",
    color: "#2e2e2e",
    // textDecoration: "line-through",
  },
  deleteButton: {
    border: "1px solid #ffdbe0",
    borderRadius: "5px",
    backgroundColor: "#ffdbe0",
    color: "#cc122c",
  },
};

export default Todo;
