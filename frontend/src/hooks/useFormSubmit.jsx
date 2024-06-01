import { useState } from "react";
import JoblyApi from "../api/api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../UserProvider";

const useFormSubmit = (initialState, apiMethod, type = "any") => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  // const [token, updateToken] = useLocalStorage("token", null);
  const { currentUser, setCurrentUser, setToken } = useUser();

  // change input as user type
  const handleChange = (e) => {
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((data) => ({
      ...data,
      [e.target.name]: newValue,
    }));
  };

  // send data to api and reset form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // get token from api
      const response = await JoblyApi[apiMethod](formData);

      if (type === "edit") {
        console.log("Edited!");
      } else if (type === "new") {
        setFormData(response);
        if (apiMethod === "postNewCompany") {
          navigate(`/companies/${formData.handle}`);
        }
        if (apiMethod === "postNewJob") {
          navigate(`/companies/${formData.companyHandle}`);
        }
        if (apiMethod === "postNewUser") {
          navigate(`/users/${formData.username}`);
        }
      } else {
        // Storage token in local storage and context
        setToken(response.token);

        // store current user in use context and storage
        const decoded = jwtDecode(response.token);
        setCurrentUser(decoded);
        // redirect to their user profile
        navigate(`/users/${formData.username}`);
      }
    } catch (err) {
      setError(err);
    }
  };

  return [formData, handleChange, handleSubmit, error];
};

export default useFormSubmit;
