import useAPI from "../../hooks/useAPI";
import User from "./User";
import SEO from "../SEO";
import { useUser } from "../../UserProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserList() {
  const navigate = useNavigate();
  const { currentUser } = useUser();

  // redirect if not admin
  useEffect(() => {
    if (!currentUser.isAdmin) {
      navigate(`/`);
    }
  }, [currentUser, navigate]);
  if (!currentUser.isAdmin) {
    return null;
  }

  // if admin below
  const [users, loading, error] = useAPI("request", "users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SEO title="Users" description="A list of users" />
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user) => (
              <User
                key={user.username}
                username={user.username}
                isAdmin={user.isAdmin}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
