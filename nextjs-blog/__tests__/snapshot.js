import { render } from "@testing-library/react";
import FirstPost from "../pages/posts/first-post";

it("renders FirstPost unchanged", () => {
  const { container } = render(<FirstPost />);
  expect(container).toMatchSnapshot();
});
