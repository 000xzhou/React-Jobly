import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

// THIS IS A GET ONLY
const useAPI = (type, request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetching company
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataItems = await JoblyApi[request](type);

        // store item depending on type of request
        if (request === "request") {
          setData(dataItems[type]);
        } else {
          setData(dataItems);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, request]);

  return [data, loading, error];
};
export default useAPI;
