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
        <h1 className="headerText">Today Todo</h1>
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
};

export default App;
