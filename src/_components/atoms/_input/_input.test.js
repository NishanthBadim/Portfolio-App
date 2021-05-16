import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputBox from "./_input";

describe("Input Box testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<InputBox />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Input field is present", () => {
    const {getByRole} = render(<InputBox />);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });


});