function User({ username, firstName, lastName, isAdmin, email }) {
  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{isAdmin ? "Admin" : "User"}</td>
    </tr>
  );
}

export default User;
