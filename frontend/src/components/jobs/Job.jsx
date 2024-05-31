import { Link } from "react-router-dom";
import JoblyApi from "../../api/api";
import { useUser } from "../../UserProvider";
import { useEffect, useState } from "react";

function Job({ id, title, companyName }) {
  const { user } = useUser();
  const [apply, setApply] = useState(false);

  useEffect(() => {
    const applyingForJob = async () => {
      try {
        await JoblyApi.postApplyJobs({
          username: user.username,
          jobId: id,
        });
        console.log("Application successful");
      } catch (error) {
        console.error("Error applying for job:", error);
      }
    };
    // apply only if apply state is true. Should only happen once then button disable
    if (apply) {
      applyingForJob();
    }
  }, [apply, id, user]);

  const handleApply = () => {
    setApply(true);
  };

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
