import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UserListContextProvider } from "../context/userListContext";
import { userList } from "../utils/dummyData";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

const queryClient = new QueryClient();

export const Provider = (Story: any) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme} resetCSS={false}>
      <Box>
        <Story />
      </Box>
    </ChakraProvider>
  </QueryClientProvider>
);

export const ProviderContext = (Story: any) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme} resetCSS={false}>
      <UserListContextProvider value={userList}>
        <Story />
      </UserListContextProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

export const ProviderContextSingleItem = (Story: any) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme} resetCSS={false}>
      <UserListContextProvider value={[userList[0]]}>
        <Story />
      </UserListContextProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

export const ProviderContextEmpty = (Story: any) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme} resetCSS={false}>
      <UserListContextProvider value={[]}>
        <Story />
      </UserListContextProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
