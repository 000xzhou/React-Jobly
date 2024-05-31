import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

const useCurrentUser = (key) => {
  const [dataState, setDataState] = useState(() => {
    const storedUser = localStorage.getItem(key);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (data) => {
    setDataState(data);
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
      if (key === "token") {
        JoblyApi.token = data;
      }
    } else {
      localStorage.removeItem(key);
    }
  };

  return [dataState, updateUser];
};

export default useCurrentUser;
