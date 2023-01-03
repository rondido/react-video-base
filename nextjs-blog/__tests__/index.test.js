import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import FirstPost from "../pages/posts/first-post";

describe("FirstPost", () => {
  it("renders a heading", () => {
    render(<FirstPost />);

    const heading = screen.getByRole("heading", {
      name: /FirstPost\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
