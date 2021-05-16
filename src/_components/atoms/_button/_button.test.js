import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./_button";

describe("Button testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<Button />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Button is present", () => {
    const { getByRole } = render(<Button value={"abc"} />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("abc");
  });

  test("Button onclick check", () => {
    const mockClick = jest.fn();
    const { getByRole } = render(<Button value={"abc"} onClick={mockClick} />);
    fireEvent.click(getByRole("button"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});