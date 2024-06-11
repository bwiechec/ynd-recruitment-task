import { User, UserRepo } from "./types";

export const repo: UserRepo = {
  name: "Repo Name",
  htmlUrl: "https://github.com",
  stargazersCount: "10",
  description: "Repo description",
  url: "https://api.github.com",
};

export const userList: User[] = [
  {
    login: "user1",
    htmlUrl: "https://api.github.com/users/bwiechec/repos",
    reposUrl: "https://api.github.com/users/bwiechec/repos",
  },
  {
    login: "user2",
    htmlUrl: "https://api.github.com/users/git/repos",
    reposUrl: "https://api.github.com/users/git/repos",
  },
];
