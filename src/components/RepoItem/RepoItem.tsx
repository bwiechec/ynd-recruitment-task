import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { UserRepo } from "../../utils/types";
import { FaStar } from "react-icons/fa6";

interface RepoItemProps {
  repo: UserRepo;
}

export const RepoItem = ({ repo }: RepoItemProps) => {
  return (
    <Box bg={"gray.300"} p={"2"} w={"90%"} textAlign={"left"}>
      <Link href={repo.htmlUrl} isExternal _hover={{ textDecoration: "none" }}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          fontWeight={"600"}
          gap={"2"}
        >
          <Text fontSize={"xl"} wordBreak={"break-all"}>
            {repo.name}
          </Text>
          <Flex alignItems={"center"} gap={"1"}>
            <Text fontSize={"l"}>{repo.stargazersCount}</Text>
            <FaStar />
          </Flex>
        </Flex>
        {repo.description && <Text>{repo.description}</Text>}
      </Link>
    </Box>
  );
};
