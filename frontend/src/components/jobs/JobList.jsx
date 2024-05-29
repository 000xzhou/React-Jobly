import SEO from "../SEO";
import React, { useState, useEffect } from "react";
import JoblyApi from "../../api/api";
import Job from "./Job";

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.request("jobs");
        setJobs(companyData.jobs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.join(", ")}</div>;

  return (
    <>
      <SEO title="Jobs" description="A list of jobs" />
      <div>
        <ul>
          {jobs.map((job) => (
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
