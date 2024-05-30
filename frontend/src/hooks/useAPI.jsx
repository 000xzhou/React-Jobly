import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

// const useAPI = (endpoint, apiMethod) => {
const useAPI = (apiMethod, endpoint, other = {}) => {
  const [apiData, setApiData] = useState(null);
  const [filter, setFilter] = useState(other);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetching data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataItems = await JoblyApi[apiMethod](endpoint, filter);
        setApiData(dataItems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, apiMethod, filter]);

  return [apiData, loading, error, filter, setFilter];
};
export default useAPI;
