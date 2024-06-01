import { Link } from "react-router-dom";

function User({ username, firstName, lastName, isAdmin, email }) {
  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{isAdmin ? "Admin" : "User"}</td>
      <td>
        <Link to={`/users/${username}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default User;
