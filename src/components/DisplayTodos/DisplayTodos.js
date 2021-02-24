import React from "react";
import Todo from "./Todo";

const DisplayTodos = ({ todos, setStorage, storage }) => {
  // const todos = [{ data: "Buy pizza", isChecked: false }];

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setStorage={setStorage}
          storage={storage}
        />
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
