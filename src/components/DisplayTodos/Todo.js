import React, { useState } from "react";

const Todo = ({ todo, deleteTodo, updateTodo, completeTodo, deleteTask }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
    deleteTask();
  };

  const handleTodoCheckbox = (id) => {
    completeTodo(id);
  };

  const handleOnClickEdit = () => {
    setIsOnEdit(true);
  };

  const handleOnChangeToDo = (e, id) => {
    console.log(e.target.value);
    updateTodo(id, e.target.value);
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
