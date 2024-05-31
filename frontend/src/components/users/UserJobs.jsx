import useAPI from "../../hooks/useAPI";

const UserJobs = ({ jobId }) => {
  const [job, loading, error] = useAPI("getJob", jobId);

  if (loading) return <div>Loading...</div>;

  return <div id={jobId}>{job.title}</div>;
};

export default UserJobs;
