import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./_navBar";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Bar testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<BrowserRouter><NavBar /></BrowserRouter>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})