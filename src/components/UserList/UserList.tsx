import { Box, Spinner } from "@chakra-ui/react";
import { useUserList } from "../../context/userListContext";
import { UserItem } from "../UserItem/UserItem";

interface UserListProps {
  isLoading: boolean;
}

export const UserList = ({ isLoading }: UserListProps) => {
  const users = useUserList();

  if (isLoading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  if (users.length === 0 || !users) {
    return <Box>No users found.</Box>;
  }

  return (
    <Box
      position={"relative"}
      gap={"2"}
      display={"flex"}
      flexDirection={"column"}
      overflowY={"auto"}
      h={"60vh"}
    >
      {users.map((user) => (
        <UserItem key={user.login} user={user} />
      ))}
    </Box>
  );
};
