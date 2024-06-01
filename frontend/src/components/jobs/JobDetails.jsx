import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";
import { useUser } from "../../UserProvider";
import JobUser from "./jobuser";

function JobDetails() {
  const { id } = useParams();
  const [job, loading, error] = useAPI("getJob", id);
  const { user, currentUser } = useUser();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This will go back to the previous page
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
        {currentUser && user && <JobUser id={id} />}

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
