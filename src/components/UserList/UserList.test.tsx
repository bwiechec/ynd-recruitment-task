import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";
import { UserListContextProvider } from "../../context/userListContext";
import { userList } from "../../utils/dummyData";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("UserList", () => {
  it("renders no users state", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserListContextProvider value={[]}>
          <UserList isLoading={false} />
        </UserListContextProvider>
      </QueryClientProvider>
    );
    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  it("renders user list", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserListContextProvider value={userList}>
          <UserList isLoading={false} />
        </UserListContextProvider>
      </QueryClientProvider>
    );
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
  });
});
