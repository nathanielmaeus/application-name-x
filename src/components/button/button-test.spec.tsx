import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./button";

test("button should have same props", async () => {
  render(
    <Button className="custom" type="submit">
      My button
    </Button>
  );

  const button = screen.getByRole("button");

  expect(button.innerHTML).toBe("My button");
  expect(button.className).toBe("custom button");
});

test("button should call onClick", async () => {
  const onClick = jest.fn();

  render(<Button type="submit" onClick={onClick} />);

  const button = screen.getByRole("button");
  fireEvent.click(button, { bubbles: true });

  expect(onClick).toHaveBeenCalledTimes(1);
});
