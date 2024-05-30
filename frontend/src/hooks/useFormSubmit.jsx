import { useState } from "react";
import JoblyApi from "../api/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../tokenContext";
import { jwtDecode } from "jwt-decode";

const useFormSubmit = (initialState, apiMethod, isEdit) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const { updateUser } = useContext(TokenContext);
  const [apiData, setApiData] = useState(null);

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
      if (isEdit) {
        setApiData(response);
      } else {
        JoblyApi.token = response.token;
        const decoded = jwtDecode(response.token);
        updateUser(decoded);
      }

      navigate(`/users/${formData.username}`);
    } catch (err) {
      setError(err);
    }
  };

  return [formData, handleChange, handleSubmit, error];
};

export default useFormSubmit;
