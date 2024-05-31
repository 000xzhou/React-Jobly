import { useParams, useNavigate } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import UserEditForm from "./UserEditForm";
import { useEffect } from "react";
import { useUser } from "../../UserProvider";
import UserJobs from "./UserJobs";

function UserDetails() {
  const { username } = useParams();
  const { currentUser } = useUser();
  // checks if you are the correct user and login
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      if (username !== currentUser.username) {
        navigate(`/`);
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

  const [user, userLoading] = useAPI("getUser", currentUser.username);

  if (userLoading) return <div>Loading...</div>;
  return (
    <>
      <SEO
        title={`Users - ${user.username}`}
        description={`Details of ${user.username}`}
      />
      <UserEditForm user={user} />
      <h3>Recently Applied Jobs</h3>
      {user.applications.map((job) => (
        <UserJobs key={job} jobId={job} />
      ))}
    </>
  );
}

export default UserDetails;
