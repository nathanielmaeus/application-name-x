import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import List from "./list";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const list = [
  {
    fullName: "Ruby Banks",
    email: "ruby.banks@example.com",
    password: "123123",
    phone: "+491231122890",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    applied_on: "01.04.2020",
    state: "submitted",
  },
];

test("should return valid data", async () => {
  act(() => {
    render(<List list={list} />, container);
  });

  const items = document.querySelectorAll('[data-locator="list-item"]')!;
  expect(items.length).toEqual(1);
});
