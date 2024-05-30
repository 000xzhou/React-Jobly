import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";

function CompanyDetails() {
  const { handle } = useParams();

  const [company, loading, error] = useAPI("getCompany", handle);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
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
