import useFormSubmit from "../../hooks/useFormSubmit";
import SEO from "../SEO";

function Register() {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, handleChange, handleSubmit, error] = useFormSubmit(
    initialState,
    "postRegister"
  );

  // returns
  return (
    <>
      <SEO title="Register" description="Become a new user to jobly" />

      <div>{error ? " Error:" + error : null}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.usename}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
