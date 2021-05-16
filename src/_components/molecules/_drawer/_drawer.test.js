import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Drawer from "./_drawer";
import { BrowserRouter } from "react-router-dom";

describe("Drawer testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<BrowserRouter><Drawer /></BrowserRouter>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})