import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Banner from "./_banner";

describe("Banner testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Banner />);
    expect(input.toJSON()).toMatchSnapshot();
  })
})