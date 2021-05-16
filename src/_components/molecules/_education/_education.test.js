import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Education from "./_education";

describe("Education testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Education/>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})