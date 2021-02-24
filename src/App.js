import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App" style={styles.container}>
      <h1>Todo List React</h1>
      <TodoList />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ff4d64",
  },
};

export default App;
