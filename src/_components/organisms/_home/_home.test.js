import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Home from "./_home";

jest.mock("../../atoms/_avatar/_avatar", () => ({
    __esModule: true,
    default: () => <div>Avatar mocked</div>
}));
jest.mock("../../molecules/_banner/_banner", () => ({
    __esModule: true,
    default: () => <div>Banner mocked</div>
}));
describe("Home component testing", () => {
    test("Matches the snapshot", () => {
        const input = create(<Home />);
        expect(input.toJSON()).toMatchSnapshot();
    });

});