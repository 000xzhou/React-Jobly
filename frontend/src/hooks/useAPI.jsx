import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

const useAPI = (type, apiMethod) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataItems = await JoblyApi[apiMethod](type);

        // store item depending on type of apiMethod
        if (apiMethod === "request") {
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
  }, [type, apiMethod]);

  return [data, loading, error];
};
export default useAPI;
