import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/combinedReducer";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="App" style={styles.container}>
        <h1>Todo List React</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

const styles = {
  container: {
    backgroundColor: "#ff4d64",
  },
};

export default App;
