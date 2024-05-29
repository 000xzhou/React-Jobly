import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../../api/api";
import { Link } from "react-router-dom";

function CompanyDetails() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [handle]);

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
