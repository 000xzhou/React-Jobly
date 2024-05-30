import SEO from "../SEO";
import Job from "./Job";
import useSearch from "../../hooks/useSearch";

function JobList() {
  // * Can provide search filter in query:
  const initialState = {
    minSalary: "",
    hasEquity: false,
    title: "",
  };

  const [formData, handleChange, jobs, loading, error] = useSearch(
    initialState,
    "request",
    "jobs"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.join(", ")}</div>;

  return (
    <>
      <SEO title="Jobs" description="A list of jobs" />
      <div>
        <form style={{ paddingLeft: "40px" }}>
          <label htmlFor="title">Search for a job: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Search here"
            onChange={handleChange}
            value={formData.title}
          />
          <label htmlFor="minSalary">Min Salary: </label>
          <input
            type="number"
            id="minSalary"
            name="minSalary"
            onChange={handleChange}
            value={formData.minSalary}
          />
          <label htmlFor="hasEquity">Equity: </label>
          <input
            type="checkbox"
            id="hasEquity"
            name="hasEquity"
            onChange={handleChange}
            checked={formData.hasEquity}
          />
        </form>

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
