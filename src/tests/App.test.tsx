import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const cardElement = screen.getByRole("card");
  expect(cardElement).toBeInTheDocument();
});
