import { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import { useUser } from "../UserProvider";

const useApplyForJob = (username, id) => {
  const [apply, setApply] = useState(false);
  const { setRefetch } = useUser();

  useEffect(() => {
    const applyingForJob = async () => {
      try {
        await JoblyApi.postApplyJobs({
          username: username,
          jobId: id,
        });
        console.log("Application successful");
        setRefetch(true);
      } catch (error) {
        console.error("Error applying for job:", error);
      }
    };
    // apply only if apply state is true. Should only happen once then button disable
    if (apply) {
      applyingForJob();
    }
  }, [apply, id, username, setRefetch]);

  const handleApply = () => {
    setApply(true);
  };

  return [apply, handleApply];
};

export default useApplyForJob;
