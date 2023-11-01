import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import AboutMePage from "./page";

describe("About Me Page", () => {
  it("should be render without crashing", () => {
    render(<AboutMePage />);

    const title = screen.getByText(/Hello! I'm Abdulrahman Alaa/);

    expect(title).toBeInTheDocument();
  });
});
