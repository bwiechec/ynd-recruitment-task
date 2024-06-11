import { render, screen } from "@testing-library/react";
import { UserItem } from "./UserItem";
import { userList } from "../../utils/dummyData";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("UserItem", () => {
  it("renders correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserItem user={userList[0]} />
      </QueryClientProvider>
    );
    expect(screen.getByText("user1")).toBeInTheDocument();
  });
});
