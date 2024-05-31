import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import { useUser } from "../../UserProvider";
import { useEffect, useState } from "react";
import JoblyApi from "../../api/api";

function JobDetails() {
  const { id } = useParams();
  const [job, loading, error] = useAPI("getJob", id);
  const [apply, setApply] = useState(false);
  const { user } = useUser();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will go back to the previous page
  };

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <SEO
        title={`Jobs - ${job.title}`}
        description={`Detail of ${job.title}`}
      />

      <div>
        {user.applications.find((jobId) => jobId == id) ? (
          <button className="button" disabled>
            Applied
          </button>
        ) : (
          <button className="button" disabled={apply} onClick={handleApply}>
            {apply ? "Applied" : "Apply"}
          </button>
        )}

        <button className="button" onClick={goBack}>
          Go Back
        </button>
        <h2>{job.title}</h2>
        <p>Salary: {job.salary}</p>
        <p> Equity: {job.equity > 0 ? "Yes" : "No"}</p>
      </div>

      <div>
        <Link key={job.id} to={`/companies/${job.company.handle}`}>
          <h3>Company: {job.company.name}</h3>
          <p>{job.company.description}</p>
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
