import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [dataState, setDataState] = useState(() => {
    const storedUser = localStorage.getItem(key);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateState = (data) => {
    setDataState(data);
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.removeItem(key);
    }
  };

  return [dataState, updateState];
};

export default useLocalStorage;
