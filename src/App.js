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
        <h1 style={styles.headerText}>Today Todo</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

const styles = {
  container: {
    backgroundColor: "#ff4d64",
    background: "linear-gradient(45deg, #7267ff 50%,#ff6c7f 50%)",
  },
  headerText: {
    fontFamily: "'Source Sans Pro', sans-serif",
    color: "#ffffff",
    margin: "55px",
    textShadow: "2px 2px #3a2ee6",
    fontSize: "45px",
  },
};

export default App;
