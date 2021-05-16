import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Experience from "./_experience";

describe("Experience testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Experience/>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})