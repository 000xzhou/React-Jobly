import useFormSubmit from "../../hooks/useFormSubmit";
import SEO from "../SEO";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, handleChange, handleSubmit, error] = useFormSubmit(
    initialState,
    "postLogin"
  );

  // Returns
  return (
    <>
      <SEO title="Login" description="Login to jobly" />

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
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="button">Login</button>
      </form>
    </>
  );
}

export default Login;
