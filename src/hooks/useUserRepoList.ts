import { useQuery } from "react-query";
import { ApiUserRepo, UserRepo } from "../utils/types";
import axios, { AxiosError } from "axios";
import { convertUserRepoToCammelCase } from "../utils/cammelCaseConverter";

export const useUserRepoList = (reposUrl: string, isOpen: boolean) => {
  const {
    isLoading,
    data,
    isError,
    error,
    status,
    isPreviousData,
    isFetching,
  } = useQuery({
    queryKey: [reposUrl],
    queryFn: async () => {
      if (!reposUrl) return { repoList: [], error: null };
      const response = await axios.get(reposUrl);

      const repoList: any[] = [];

      response.data.forEach((repo: ApiUserRepo) => {
        repoList.push(convertUserRepoToCammelCase(repo));
      });

      const returnData: {
        repoList: UserRepo[];
        error: AxiosError | null;
      } = {
        repoList: repoList,
        error: null,
      };

      return returnData;
    },
    onError: (error: AxiosError) => {
      return { repoList: [], error: error };
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
    enabled: isOpen,
  });

  return {
    isLoading,
    data,
    isError,
    error,
    status,
    isPreviousData,
    isFetching,
  };
};
