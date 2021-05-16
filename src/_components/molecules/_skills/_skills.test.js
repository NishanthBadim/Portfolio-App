import React from "react";
import { create } from "react-test-renderer";
import { render, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Skills from "./_skills";

describe("Skills testing", () => {
    test(" Skill Java is present", () => {
        const { getByText } = render(<Skills skill={"Java"} />);
        const input = getByText("Java");
        expect(input).toBeInTheDocument();
    })
})