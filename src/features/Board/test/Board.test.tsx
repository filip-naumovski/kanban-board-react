import { fireEvent, render, screen } from "@testing-library/react";
import Board from "../Board";

describe("Board", () => {
  it("should render add column button", () => {
    render(<Board />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should not render input initally", () => {
    render(<Board />);
    expect(
      screen.queryByPlaceholderText("Enter column title")
    ).not.toBeInTheDocument();
  });

  it("should render input after clicking add column button", () => {
    render(<Board />);
    const addColumnButton = screen.getByRole("button");
    fireEvent.click(addColumnButton);
    expect(
      screen.getByPlaceholderText("Enter column title")
    ).toBeInTheDocument();
  });

  it("should not render input after pressing Escape", () => {
    render(<Board />);
    const addColumnButton = screen.getByRole("button");
    fireEvent.click(addColumnButton);
    const input = screen.getByPlaceholderText("Enter column title");
    fireEvent.keyDown(input, { key: "Escape", code: 27 });
    expect(
      screen.queryByPlaceholderText("Enter column title")
    ).not.toBeInTheDocument();
  });

  it("should not render input after pressing Enter", () => {
    render(<Board />);
    const addColumnButton = screen.getByRole("button");
    fireEvent.click(addColumnButton);
    const input = screen.getByPlaceholderText("Enter column title");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(
      screen.queryByPlaceholderText("Enter column title")
    ).not.toBeInTheDocument();
  });

  it("should render a column after valid input", () => {
    render(<Board />);
    const addColumnButton = screen.getByRole("button");
    fireEvent.click(addColumnButton);
    const input = screen.getByPlaceholderText("Enter column title");
    fireEvent.change(input, { target: { value: "Test Title" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
