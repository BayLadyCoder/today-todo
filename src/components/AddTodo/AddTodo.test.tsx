import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/combinedReducer";

type Props = {
  children: JSX.Element;
};
const ReduxProvider = ({ children }: Props) => {
  const store = createStore(rootReducer);
  return <Provider store={store}> {children}</Provider>;
};

afterEach(() => {
  cleanup();
});

describe("AddTodo", () => {
  test("Render AddTodo Component", () => {
    const { getByTestId } = render(
      <ReduxProvider>
        <AddTodo />
      </ReduxProvider>
    );
    const addTodoForm = getByTestId("add-todo-form");
    expect(addTodoForm).toBeInTheDocument();
  });
});
