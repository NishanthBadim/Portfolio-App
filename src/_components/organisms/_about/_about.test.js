import React from 'react'
import { create } from 'react-test-renderer'
import "@testing-library/jest-dom/extend-expect"
import About from './_about'

jest.mock('./../../molecules/_experience/_experience', () => ({
    __esModule: true,
    default: () => <div>I am mocked</div>
}));

jest.mock('./../../molecules/_education/_education', () => ({
    __esModule: true,
    default: () => <div>I am mocked</div>
}));

jest.mock('./../../molecules/_skills/_skills', () => ({
    __esModule: true,
    default: () => <div>I am mocked</div>
}));

describe("About Component Testing", () => {
    test("Match the Snapshot", () => {
        const input = create(<About />)
        expect(input.toJSON()).toMatchSnapshot();
    })
})