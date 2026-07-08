/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");

});
it("Displays the Nice99 text", () => {
  render(<Page />);
  expect(screen.getByText("Nice99")).toBeInTheDocument();
});