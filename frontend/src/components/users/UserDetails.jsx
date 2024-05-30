import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import UserEditForm from "./UserEditForm";

function UserDetails() {
  const { username } = useParams();
  const [user, loading, apiError] = useAPI("getUser", username);

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
