import { StoryObj } from "@storybook/react";
import { UserList } from "./UserList";
import {
  ProviderContext,
  ProviderContextEmpty,
  ProviderContextSingleItem,
} from "../../decorators/Provider";

const meta = {
  title: "Components/UserList",
  component: UserList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty_list: Story = {
  decorators: [ProviderContextEmpty],
  args: {
    isLoading: false,
  },
};

export const Single_item_list: Story = {
  decorators: [ProviderContextSingleItem],
  args: {
    isLoading: false,
  },
};

export const Two_item_list: Story = {
  decorators: [ProviderContext],
  args: {
    isLoading: false,
  },
};
