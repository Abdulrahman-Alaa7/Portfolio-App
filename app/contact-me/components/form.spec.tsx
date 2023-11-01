import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Form from "./form";

describe("FormMission component", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation();

  let axiosMock: MockAdapter;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore(), consoleSpy.mockClear();
  });

  it("should submit the form and show a successful message", () => {
    axiosMock.onPost("/api/contact").reply(200, { message: "Success!" });

    render(<Form />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: {
        value: "Abdulrahman",
      },
    });

    fireEvent.change(screen.getByLabelText("Company"), {
      target: {
        value: "Not yet!",
      },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: {
        value: "abdoalaamohamed77@gmail.com",
      },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: {
        value: "Hey there!",
      },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Send message" }));

    waitFor(() => {
      expect(screen.getByText("Message has been sent")).toBeInTheDocument();
    });
  });

  it("should handle 400 Bad Request response", () => {
    axiosMock.onPost("/api/contact").reply(400, { message: "Bad Request" });

    render(<Form />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: {
        value: "Abdulrahman",
      },
    });

    fireEvent.change(screen.getByLabelText("Company"), {
      target: {
        value: "Not yet!",
      },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: {
        value: "abdoalaamohamed77@gmail.com",
      },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: {
        value: "Hey there!",
      },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Send message" }));

    waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "There was a problem with the fetch operation HTTP error! status: 400"
      );
    });
  });

  it("should handle 500 Internal Sever Error", () => {
    axiosMock
      .onPost("/api/contact")
      .reply(500, { message: "Internal Sever Error" });

    render(<Form />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: {
        value: "Abdulrahman",
      },
    });

    fireEvent.change(screen.getByLabelText("Company"), {
      target: {
        value: "Not yet!",
      },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: {
        value: "abdoalaamohamed77@gmail.com",
      },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: {
        value: "Hey there!",
      },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Send message" }));

    waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "There was a problem with the fetch operation HTTP error! status: 500"
      );
    });
  });
});
