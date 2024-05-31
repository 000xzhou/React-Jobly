import React, { createContext, useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./api/api";
import useAPI from "./hooks/useAPI";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // load user and token
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [token, setToken] = useLocalStorage("token", null);

  // set token
  JoblyApi.token = token;

  // get jobs from user - user.jobs
  const [user, loading, error, filter, setFilter, setRefetch] = useAPI(
    "getUser",
    currentUser.username
  );
  // waiting for it to load before returning data
  if (loading) {
    return <div>Loading user data...</div>;
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, setToken, user, setRefetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
