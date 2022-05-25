import { render, screen } from "@testing-library/react";
import Card from "../Card";

const card = {
  id: 0,
  text: "Test Card Text",
  priority: 0,
  columnId: 0,
};

describe("Card", () => {
  it("should render", () => {
    render(<Card card={card} columnId={0} />);
  });

  it("should render the values from props", () => {
    render(<Card card={card} columnId={0} />);
    expect(screen.getByText("Test Card Text")).toBeInTheDocument();
  });

  it("should not show the card buttons while not hovering", () => {
    render(<Card card={card} columnId={0} />);
    expect(screen.queryByText("▼")).not.toBeVisible();
    expect(screen.queryByText("▲")).not.toBeVisible();
    expect(screen.queryByText("<")).not.toBeVisible();
    expect(screen.queryByText(">")).not.toBeVisible();
    expect(screen.queryByTitle("Remove Card")).not.toBeVisible();
  });
});
