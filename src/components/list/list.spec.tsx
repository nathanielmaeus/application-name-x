import React from "react";
import { render } from "@testing-library/react";
import List from "./list";

const list = [
  {
    id: 1,
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
  const { container } = render(<List list={list} />);
  const items = container.querySelectorAll('[data-locator="list-item"]')!;
  expect(items.length).toEqual(1);
});
