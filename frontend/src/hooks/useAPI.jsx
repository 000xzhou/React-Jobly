import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

const useAPI = (type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.request(type);
        setData(companyData[type]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [type]);

  return [data, loading, error];
};
export default useAPI;
