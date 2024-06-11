import { Box, Collapse, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { User } from "../../utils/types";
import { RepoItem } from "../RepoItem/RepoItem";
import { useUserRepoList } from "../../hooks/useUserRepoList";

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: userListData,
    isLoading,
    isError,
  } = useUserRepoList(user.reposUrl, isOpen);

  const toast = useToast();

  const handleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  if (isError) {
    setIsOpen(false);
    toast.closeAll();
    toast({
      title: "An error occurred.",
      description: "Unable to fetch user repos. Try again later.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Box>
      <Flex
        bg={"gray.200"}
        p={"2"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={handleCollapse}
        cursor={"pointer"}
      >
        <Text>{user.login}</Text>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </Flex>
      <Collapse in={isOpen}>
        {isLoading && <Spinner mt={"2"} />}
        {isError && <Text>Error fetching user repos.</Text>}
        <Flex
          flexDirection={"column"}
          gap={"2"}
          mt={"2"}
          alignItems={"flex-end"}
        >
          {userListData?.repoList.length === 0 && (
            <Box p={"2"} w={"100%"}>
              <Text>User has no repositories</Text>
            </Box>
          )}
          {userListData?.repoList.map((repo) => {
            return <RepoItem repo={repo} key={repo.htmlUrl} />;
          })}
        </Flex>
      </Collapse>
    </Box>
  );
};
