import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

// const useAPI = (endpoint, apiMethod) => {
const useAPI = (apiMethod, endpoint) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataItems = await JoblyApi[apiMethod](endpoint);
        setApiData(dataItems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, apiMethod]);

  return [apiData, loading, error];
};
export default useAPI;
