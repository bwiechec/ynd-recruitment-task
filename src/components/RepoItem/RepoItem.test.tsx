import { render, screen } from "@testing-library/react";
import { RepoItem } from "./RepoItem";
import { repo } from "../../utils/dummyData";

describe("RepoItem", () => {
  it("renders correctly", () => {
    render(<RepoItem repo={repo} />);
    expect(screen.getByText("Repo Name")).toBeInTheDocument();
    expect(screen.getByText("Repo description")).toBeInTheDocument();
  });

  it("links to the correct URL", () => {
    render(<RepoItem repo={repo} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com"
    );
  });
});
