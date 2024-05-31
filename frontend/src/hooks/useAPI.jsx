import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

// const useAPI = (endpoint, apiMethod) => {
const useAPI = (apiMethod, endpoint, other = {}) => {
  const [apiData, setApiData] = useState(null);
  const [filter, setFilter] = useState(other);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);

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

  // in case I need to update data I can call this api end point
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
  if (refetch) {
    fetchData();
    //   reset to false
    setRefetch(false);
  }

  return [apiData, loading, error, filter, setFilter, setRefetch];
};
export default useAPI;
