import { Link } from "react-router-dom";
import { useUser } from "../../UserProvider";
import useApplyForJob from "../../hooks/useApplyForJob";

function Job({ id, title, companyName }) {
  const { user } = useUser();
  const [apply, handleApply] = useApplyForJob(user.username, id);

  return (
    <div id={id}>
      <Link to={`/jobs/${id}`}>
        <h2>{title}</h2>
        <p>{companyName}</p>
      </Link>
      {user.applications.find((jobId) => jobId === id) ? (
        <button className="button" disabled>
          Applied
        </button>
      ) : (
        <button className="button" disabled={apply} onClick={handleApply}>
          {apply ? "Applied" : "Apply"}
        </button>
      )}
    </div>
  );
}

export default Job;
