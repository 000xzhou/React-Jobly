import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import UserEditForm from "./UserEditForm";
import UserJobs from "./UserJobs";
import useAccess from "../../hooks/useAccess";

function UserDetails() {
  const { username } = useParams();

  const currentUser = useAccess(username, "user");

  if (!currentUser) {
    return null;
  }

  // get user api

  const [user, userLoading] = useAPI("getUser", username);

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
