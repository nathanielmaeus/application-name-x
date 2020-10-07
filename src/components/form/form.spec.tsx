import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./form";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

function getElement(query: string) {
  return document.querySelector(query)!;
}

function handleChange(element: Element, value: string) {
  fireEvent.change(element, {
    target: { value },
    bubbles: true,
  });
}

test("should return valid data", async () => {
  const onSubmit = jest.fn();

  render(<Form onSubmit={onSubmit} />, container);

  handleChange(getElement("#email"), "email");
  handleChange(getElement("#firstName"), "firstName");
  handleChange(getElement("#lastName"), "lastName");
  handleChange(getElement("#firstName"), "firstName");
  handleChange(getElement("#password"), "password");
  handleChange(getElement("#phoneNumber"), "29347239487");

  await fireEvent.click(screen.getByRole("button"));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    email: "email",
    firstName: "firstName",
    lastName: "lastName",
    password: "password",
    phoneNumber: "29347239487",
  });
});
