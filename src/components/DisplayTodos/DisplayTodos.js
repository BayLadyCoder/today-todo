import React from "react";
import Todo from "./Todo.container";

const DisplayTodos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
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
