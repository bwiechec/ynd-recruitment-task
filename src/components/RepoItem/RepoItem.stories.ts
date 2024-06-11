import { StoryObj } from "@storybook/react";
import { RepoItem } from "./RepoItem";
import { repo } from "../../utils/dummyData";
import { Provider } from "../../decorators/Provider";

const meta = {
  title: "Components/RepoItem",
  component: RepoItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Repo_provided: Story = {
  decorators: [Provider],
  args: {
    repo: repo,
  },
};
