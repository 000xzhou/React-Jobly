import React, { createContext, useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./api/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // load user and token
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [token, setToken] = useLocalStorage("token", null);

  // set token
  JoblyApi.token = token;

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
