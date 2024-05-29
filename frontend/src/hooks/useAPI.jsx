import { useState, useEffect } from "react";
import JoblyApi from "../api/api";

const useAPI = (type, request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   fetching company
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi[request](type);

        // store item depending on type of request
        if (request === "request") {
          setData(companyData[type]);
        } else {
          setData(companyData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [type, request]);

  return [data, loading, error];
};
export default useAPI;
