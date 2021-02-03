import React from "react";
import Todo from "./Todo";

const DisplayTodos = () => {
  return (
    <div style={styles.container}>
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

export default DisplayTodos;
