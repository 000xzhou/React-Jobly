import SEO from "../SEO";
import Job from "./Job";
import useAPI from "../../hooks/useAPI";

function JobList() {
  const [jobs, loading, error] = useAPI("request", "jobs");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.join(", ")}</div>;
  // * Can provide search filter in query:
  // * - minSalary
  // * - hasEquity (true returns only jobs with equity > 0, other values ignored)
  // * - title (will find case-insensitive, partial matches)
  return (
    <>
      <SEO title="Jobs" description="A list of jobs" />
      <div>
        <ul>
          {jobs.jobs.map((job) => (
            <Job
              key={job.id}
              id={job.id}
              title={job.title}
              companyName={job.companyName}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default JobList;
