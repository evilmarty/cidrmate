import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the component", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("updates the output when the input changes", () => {
    render(<App />);
    const input = screen.getByLabelText("CIDR");
    fireEvent.change(input, { target: { value: "10.0.0.0/24" } });
    expect(screen.getByLabelText("Total Hosts").value).toBe("254");
  });
});