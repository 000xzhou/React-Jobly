import { useState } from "react";
import JoblyApi from "../api/api";
import { redirect } from "react-router-dom";

const useFormSubmit = (initialState, apiMethod) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  // change input as user type
  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  // send data to api and reset form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // get token from api
      const response = await JoblyApi[apiMethod](formData);
      // save token
      JoblyApi.token = response.token;
      // setFormData(initialState);

      // Redirect after submit
      redirect(`/user/${formData.username}`);
    } catch (err) {
      setError(err);
    }
  };

  return [formData, handleChange, handleSubmit, error];
};

export default useFormSubmit;
