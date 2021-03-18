import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

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
      <div style={styles.todoDataContainer}>
        {isOnEdit ? (
          <div style={styles.todoTextContainer}>
            <input
              style={styles.textInput}
              type="text"
              value={todo.data}
              onChange={(e) => handleOnChangeToDo(e, todo.id)}
              onKeyDown={(e) => handleKeyPressEnter(e)}
            />
            <FaCheck
              onClick={() => setIsOnEdit(false)}
              style={styles.checkIcon}
            />
          </div>
        ) : (
          <div
            onClick={() => handleOnClickEdit()}
            style={styles.todoTextContainer}
          >
            <p
              style={{
                ...styles.todoData,
                textDecoration: todo.isChecked ? "line-through" : "none",
              }}
            >
              {todo.data}
            </p>
            <MdEdit
              onClick={() => handleOnClickEdit()}
              style={styles.editIcon}
            />
          </div>
        )}
      </div>
      {!isOnEdit && (
        <BsTrash
          onClick={() => handleDeleteTodo(todo.id)}
          style={styles.trashIcon}
        />
      )}
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
  textInput: {
    color: "#2e2e2e",

    padding: "5px",
    width: "90%",
    // marginRight: "10px",
    fontSize: "16px",
    border: "2px solid #70e8a9",
    borderRadius: "5px",
  },
  checkbox: {
    backgroundColor: "pink",
    fontSize: "20px",
  },
  todoDataContainer: {
    width: "100%",
    // margin: "0 15px",
    padding: "15px",
  },
  todoTextContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    cursor: "pointer",
  },
  todoData: {
    fontSize: "18px",
    color: "#2e2e2e",
  },
  trashIcon: {
    color: "#FD8C7E",
    fontSize: "20px",
    cursor: "pointer",
  },
  checkIcon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#3ddf8a",
  },
  editIcon: {
    color: "#8c7efd",

    fontSize: "22px",
    cursor: "pointer",
  },
};

export default Todo;
