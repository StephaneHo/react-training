import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyTextField } from "./TextField";

describe("MyTextField", () => {
  it("tests the default props", () => {
    render(<MyTextField placeholder="Enter text here" />);
    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("theTest"); // la valeur initiale est vide
  });

  it("tests the onChange event", () => {
    render(<MyTextField placeholder="Enter text here" />);
    const input = screen.getByPlaceholderText("Enter text here");
    const value = "Entered Text";

    fireEvent.change(input, {
      target: {
        value,
      },
    });
    expect(input).toHaveValue("Entered Text"); // le state a ete mis a jour
  });
});
