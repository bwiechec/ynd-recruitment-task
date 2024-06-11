import { useRef, useState, KeyboardEvent } from "react";
import "./App.css";
import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { useUserList } from "./hooks/useUserList";
import { UserListContextProvider } from "./context/userListContext";
import { UserList } from "./components/UserList/UserList";

const App = () => {
  const [username, setUsername] = useState("");
  const {
    data: userListData,
    isLoading,
    isError,
    isFetching,
  } = useUserList(username);
  const usernameRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  if (isError) {
    toast.closeAll();
    toast({
      title: "An error occurred.",
      description: "Unable to fetch user list. Try again later.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  const handleUsernameSearch = () => {
    setUsername(usernameRef.current?.value || "");
  };

  const handleInputKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUsernameSearch();
    }
  };

  return (
    <>
      <Box
        gap={"4"}
        display={"flex"}
        flexDirection={"column"}
        p={"4"}
        bg={"gray.50"}
        w={{ base: "80", md: "md", xl: "xl", "2xl": "2xl" }}
      >
        <Input
          placeholder="Enter username"
          ref={usernameRef}
          onKeyUp={handleInputKeyUp}
        />
        <Button
          bg={"blue.300"}
          textColor={"gray.50"}
          onClick={handleUsernameSearch}
          _hover={{ bg: "blue.400" }}
        >
          Search
        </Button>
        <UserListContextProvider value={userListData?.userList || []}>
          <UserList isLoading={isLoading || isFetching} />
        </UserListContextProvider>
      </Box>
    </>
  );
};

export default App;
