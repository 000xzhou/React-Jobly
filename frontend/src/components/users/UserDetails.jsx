import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";

function UserDetails() {
  const { username } = useParams();
  const [user, loading, error] = useAPI("getUser", username);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if user and user.user are defined
  return (
    <>
      <SEO
        title={`Users - ${user.username}`}
        description={`Details of ${user.username}`}
      />

      <div>
        Hello {user.firstName} {user.lastName}
      </div>
      <div>Recently Applied Jobs</div>
      {user.applications.map((job) => (
        <div key={job.id}>{job.title}</div>
      ))}
    </>
  );
}

export default UserDetails;
