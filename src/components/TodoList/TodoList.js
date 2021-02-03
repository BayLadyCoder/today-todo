import React from "react";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";

const TodoList = () => {
  return (
    <div style={styles.container}>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "lightgrey",
    flexDirection: "column",
    // justifyContent: "center",
  },
};

export default TodoList;
