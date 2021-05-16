import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./_contactForm";

describe("Contact Form testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<ContactForm />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Provide Valid Inputs to the Contact Form", () => {
    const { getByPlaceholderText, getByRole ,getByTestId} = render(<ContactForm />);
    fireEvent.change(getByPlaceholderText("Enter your name"), {
        target: { value: "Johnson" },
      });
      fireEvent.change(getByPlaceholderText("Enter your email address"), {
        target: { value: "john@gmail.com" },
      });
      fireEvent.change(getByPlaceholderText("Enter your phone number"), {
        target: { value: "1234567890" },
      });
      fireEvent.change(getByPlaceholderText("Enter the subject"), {
        target: { value: "hello" },
      });
    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError").value).toBeUndefined(); 
 });

  test("Provide Empty Inputs", () => {
    const { getByRole ,getByTestId} = render(<ContactForm />);

    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError")).toBeInTheDocument();
  });

  test("Provide Inavlid Inputs", () => {
    const { getByPlaceholderText, getByRole ,getByTestId} = render(<ContactForm />);
    fireEvent.change(getByPlaceholderText("Enter your name"), {
        target: { value: "12345" },
      });
      fireEvent.change(getByPlaceholderText("Enter your email address"), {
        target: { value: "xyz" },
      });
      fireEvent.change(getByPlaceholderText("Enter your phone number"), {
        target: { value: "atoz" },
      });
    fireEvent.click(getByRole("button"));
    expect(getByTestId("emailError")).toBeInTheDocument(); 
 });



});