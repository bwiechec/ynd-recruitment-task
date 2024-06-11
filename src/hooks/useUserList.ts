import { useQuery } from "react-query";
import { ApiUser, User } from "../utils/types";
import axios, { AxiosError } from "axios";
import {
  // convertUserRepoToCammelCase,
  convertUserToCammelCase,
} from "../utils/cammelCaseConverter";

export const useUserList = (username?: string) => {
  const url = "https://api.github.com/search/users";
  const params = {
    per_page: 5,
    q: username || null,
  };

  const {
    isLoading,
    data,
    isError,
    error,
    status,
    isPreviousData,
    isFetching,
  } = useQuery({
    queryKey: [username],
    queryFn: async () => {
      if (!params.q) return { totalCount: 0, userList: [], error: null };
      const response = await axios.get(url, {
        params: params,
      });

      const userList: User[] = [];
      response?.data?.items?.forEach((user: ApiUser) => {
        userList.push(convertUserToCammelCase(user));
      });

      const returnData: {
        totalCount: number;
        userList: User[];
        error: AxiosError | null;
      } = {
        totalCount: response.data.total_count,
        userList,
        error: null,
      };

      return returnData;
    },
    onError: (error: AxiosError) => {
      return { totalCount: 0, userList: [], error: error };
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
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
