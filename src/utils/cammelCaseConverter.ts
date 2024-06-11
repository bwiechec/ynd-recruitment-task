import { ApiUser, ApiUserRepo, User, UserRepo } from "./types";

export const convertUserToCammelCase = (user: ApiUser): User => {
  return {
    login: user.login,
    htmlUrl: user.html_url,
    reposUrl: user.repos_url,
  };
};

export const convertUserRepoToCammelCase = (
  userRepo: ApiUserRepo
): UserRepo => {
  return {
    name: userRepo.name,
    stargazersCount: userRepo.stargazers_count,
    description: userRepo.description,
    url: userRepo.url,
    htmlUrl: userRepo.html_url,
  };
};
