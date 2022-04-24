import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders card element", () => {
  render(<App />);
  const cardElement = screen.getByRole("card");
  expect(cardElement).toBeInTheDocument();
});
