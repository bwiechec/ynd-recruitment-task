import { Flex, Link, Text } from "@chakra-ui/react";
import { UserRepo } from "../../utils/types";
import { FaStar } from "react-icons/fa6";

interface RepoItemProps {
  repo: UserRepo;
}

export const RepoItem = ({ repo }: RepoItemProps) => {
  return (
    <Link
      href={repo.htmlUrl}
      isExternal
      _hover={{ textDecoration: "none" }}
      bg={"gray.300"}
      p={"2"}
      w={"90%"}
      textAlign={"left"}
      height={"24"}
    >
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
      {repo.description && (
        <Text h={"12"} overflow={"hidden"}>
          {repo.description}
        </Text>
      )}
    </Link>
  );
};
