import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import MyProjects from "./page";

describe("My Projects Page", () => {
  it("Should be render without crashing", () => {
    render(<MyProjects />);

    const title = screen.getByText(/My projects/);

    expect(title).toBeInTheDocument();
  });
});
