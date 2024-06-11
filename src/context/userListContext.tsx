import { ReactNode, createContext, useContext } from "react";
import { User } from "../utils/types";

export const UserListContext = createContext<User[]>([]);

export const useUserList = () => {
  const context = useContext(UserListContext);
  if (!context) {
    throw new Error("useUserList must be used within a UserListProvider");
  }
  return context;
};

export const UserListContextProvider = ({
  value,
  children,
}: {
  value: User[];
  children: ReactNode;
}) => {
  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
};
