import useFormSubmit from "../../hooks/useFormSubmit";
import { useState, useEffect } from "react";

const UserEditForm = ({ user }) => {
  const initialState = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  const [formData, handleChange, handleSubmit, error] = useFormSubmit(
    initialState,
    "patchUser",
    "edit"
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing((prevState) => !prevState);
  };

  function combinedSubmit(event) {
    handleSubmit(event);
    // toggle it back to other state
    handleIsEditing(event);
  }

  if (error) return <div>Error: {error.message}</div>;

  // Check if user and user.user are defined
  return (
    <>
      <div>
        <h2>
          Hello2 {formData.firstName} {formData.lastName}
        </h2>
        <div>
          {isEditing ? (
            <form onSubmit={combinedSubmit}>
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
              <button>Edit</button>
            </form>
          ) : (
            <button onClick={handleIsEditing}>Edit Profile</button>
          )}
        </div>
      </div>
    </>
  );
};
export default UserEditForm;
