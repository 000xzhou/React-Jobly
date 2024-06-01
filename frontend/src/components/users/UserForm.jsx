import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";
import useFormSubmit from "../../hooks/useFormSubmit";

function UserForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser, "admin");

  if (!user) {
    return null;
  }

  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
  };

  const [formData, handleChange, handleSubmit] = useFormSubmit(
    initialState,
    "postNewUser",
    "new"
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">password: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Min of length of 5"
        value={formData.password}
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
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="isAdmin">isAdmin: </label>
      <input
        type="checkbox"
        name="isAdmin"
        id="isAdmin"
        value={formData.isAdmin}
        onChange={handleChange}
        checked={formData.isAdmin}
      />

      <button className="button">Add new user</button>
    </form>
  );
}

export default UserForm;
