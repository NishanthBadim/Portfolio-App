import React from 'react';
import {create} from 'react-test-renderer'
import "@testing-library/jest-dom/extend-expect";
import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Avatar from './_avatar'

test("Match the snapshot - Avatar",() => {
    const input=create(<Avatar />);
    expect(input.toJSON()).toMatchSnapshot();
})

test("Image is present", () => {
    render(<Avatar/>);
    const image=screen.getByAltText("avatar");
    expect(image).toBeInTheDocument();
})