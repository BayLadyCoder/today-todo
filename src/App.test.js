import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Render App", () => {
  test("Render App", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });

  test("Render Today Todo, header text", () => {
    render(<App />);
    const headerText = screen.getByText(/Today Todo/i);
    expect(headerText).toBeInTheDocument();
  });
});
