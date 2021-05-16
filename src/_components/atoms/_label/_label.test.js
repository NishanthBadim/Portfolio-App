import React from "react";
import { create } from "react-test-renderer";
import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from "./_label";

describe("Label  testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Label />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test(" Label is present", () => {
    const {getByText}=render(<Label text={"label"}/>);
    const input = getByText("label");
        expect(input).toBeInTheDocument();
  });
});