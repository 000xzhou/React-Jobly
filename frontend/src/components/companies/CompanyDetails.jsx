import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import SEO from "../SEO";

function CompanyDetails() {
  const { handle } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  const [company, loading, error] = useAPI("getCompany", handle);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <SEO
        title={`Companies - ${company.name}`}
        description={`Detail of ${company.name}`}
      />

      <div>
        <button className="button" onClick={goBack}>
          Go Back
        </button>
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        <p>Employees: {company.numEmployees}</p>
      </div>
      <div>
        <h3>Job Openings</h3>
        <div>
          {company.jobs.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`}>
              <div className="button">
                <h4>{job.title}</h4>
                {job.salary ? <p>Salary: {job.salary}</p> : null}
                <p> Equity: {job.equity > 0 ? "Yes" : "No"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
