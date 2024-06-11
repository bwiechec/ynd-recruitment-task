import { Box, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { User } from "../../utils/types";
import { RepoItem } from "../RepoItem/RepoItem";

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box>
      <Flex
        bg={"gray.200"}
        p={"2"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={handleCollapse}
      >
        <Text>{user.login}</Text>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </Flex>
      <Collapse in={isOpen}>
        <Flex
          flexDirection={"column"}
          gap={"2"}
          mt={"2"}
          alignItems={"flex-end"}
        >
          {user.reposList?.map((repo) => {
            return <RepoItem repo={repo} key={repo.htmlUrl} />;
          })}
        </Flex>
      </Collapse>
    </Box>
  );
};
