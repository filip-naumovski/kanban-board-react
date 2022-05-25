import { render, screen, fireEvent } from "@testing-library/react";
import Column from "../Column";

describe("Column", () => {
  it("should render", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[]}
      />
    );
  });

  it("should render a title", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "Test Title",
        }}
        cards={[]}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render a card", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[
          {
            id: 0,
            text: "Test Card Text",
            priority: 0,
            columnId: 0,
          },
        ]}
      />
    );
    expect(screen.getByText("Test Card Text")).toBeInTheDocument();
  });

  it("should show the input when clicking the add card button", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[]}
      />
    );
    const addCardButton = screen.getByTitle("Add Card");
    fireEvent.click(addCardButton);
    expect(
      screen.getByPlaceholderText("Type in the card text...")
    ).toBeInTheDocument();
  });

  it("should not show the input when pressing Escape", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[]}
      />
    );
    const addCardButton = screen.getByTitle("Add Card");
    fireEvent.click(addCardButton);
    const input = screen.getByPlaceholderText("Type in the card text...");
    fireEvent.keyDown(input, { key: "Escape", code: 27 });
    expect(
      screen.queryByPlaceholderText("Type in the card text...")
    ).not.toBeInTheDocument();
  });

  it("should not show the input when pressing Enter", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[]}
      />
    );
    const addCardButton = screen.getByTitle("Add Card");
    fireEvent.click(addCardButton);
    const input = screen.getByPlaceholderText("Type in the card text...");
    fireEvent.change(input, { target: { value: "Test Card Text" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(
      screen.queryByPlaceholderText("Type in the card text...")
    ).not.toBeInTheDocument();
  });

  it("should properly render cards from the cards prop", () => {
    render(
      <Column
        column={{
          id: 0,
          title: "",
        }}
        cards={[
          {
            id: 0,
            text: "Test Card Text",
            priority: 0,
            columnId: 0,
          },
          {
            id: 1,
            text: "Test Card Text 2",
            priority: 0,
            columnId: 0,
          },
        ]}
      />
    );
    expect(screen.getByText("Test Card Text")).toBeInTheDocument();
    expect(screen.getByText("Test Card Text 2")).toBeInTheDocument();
  });
});
