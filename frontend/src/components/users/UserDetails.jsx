import { useParams, useNavigate } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import UserEditForm from "./UserEditForm";
import TokenContext from "../../tokenContext";
import { useContext, useEffect } from "react";

function UserDetails() {
  const { username } = useParams();

  // checks if you are the correct user and login
  const { currentUser } = useContext(TokenContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      if (username !== currentUser.username) {
        navigate(`/users/${currentUser.username}`);
      }
    } else {
      navigate("/login");
    }
  }, [username, currentUser, navigate]);
  // Only fetch user data if currentUser matches the username from params
  if (!currentUser || username !== currentUser.username) {
    return null;
  }

  // get user api
  const [user, loading] = useAPI("getUser", username);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <SEO
        title={`Users - ${user.username}`}
        description={`Details of ${user.username}`}
      />
      <UserEditForm user={user} />
      <h3>Recently Applied Jobs</h3>
      {user.applications.length == 0
        ? "You haven't apply to any!"
        : user.applications.map((job) => <div key={job.id}>{job.title}</div>)}
    </>
  );
}

export default UserDetails;
