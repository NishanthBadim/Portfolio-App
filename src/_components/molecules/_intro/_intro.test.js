import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Intro from "./_intro";

describe("Intro testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Intro/>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})