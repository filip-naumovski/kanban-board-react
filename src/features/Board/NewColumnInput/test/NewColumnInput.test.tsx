import { createRef } from "react";
import NewColumnInput from "../NewColumnInput";
import { render, screen } from "@testing-library/react";

describe("NewColumnInput", () => {
  const inputRef = createRef<HTMLInputElement>();
  const value = "";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  it("should render", () => {
    render(
      <NewColumnInput
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
    expect(
      screen.getByPlaceholderText("Enter column title")
    ).toBeInTheDocument();
  });
});
