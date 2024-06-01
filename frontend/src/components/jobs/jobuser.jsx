import { useUser } from "../../UserProvider";
import useApplyForJob from "../../hooks/useApplyForJob";

function JobUser({ id }) {
  const { user } = useUser();
  const [apply, handleApply] = useApplyForJob(user.username, id);

  return (
    <div id={id}>
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

export default JobUser;
