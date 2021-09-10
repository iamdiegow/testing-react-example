import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Hello component", () => {
  it("renders without crashing", () => {
    render(<Hello />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
