export interface ApiUser {
  login: string;
  html_url: string;
  repos_url: string;
}

export interface User {
  login: string;
  htmlUrl: string;
  reposUrl: string;
  reposList?: UserRepo[];
}

export interface ApiUserRepo {
  name: string;
  stargazers_count: string;
  description: string;
  url: string;
  html_url: string;
}

export interface UserRepo {
  name: string;
  stargazersCount: string;
  description: string;
  url: string;
  htmlUrl: string;
}
