import { useState } from "react";
import useAPI from "./useAPI";

const useSearch = (initialState, apiMethod, endpoint) => {
  const [formData, setFormData] = useState(initialState);

  const [apiData, loading, error, filter, setFilter] = useAPI(
    apiMethod,
    endpoint
  );

  const handleChange = (e) => {
    e.preventDefault();
    const { name, type, checked, value } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    // update form
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Update filter
    let updatedFilter = {
      ...filter,
      [name]: newValue,
    };

    // Remove keys with empty values from the filter if val is empty before sending to api
    if (value === "") {
      delete updatedFilter[name];
    }

    // get api
    setFilter(updatedFilter);
  };
  return [formData, handleChange, apiData, loading, error];
};

export default useSearch;
