import useAccess from "../../src/hooks/useAccess";
import useAPI from "../../src/hooks/useAPI";
import React, { useEffect } from "react";

const TestComponentAccess = ({ username, accessType }) => {
  useAccess(username, accessType);
  return <div>Test Component</div>;
};

const TestComponentAPI = ({ apiMethod, endpoint, triggerRefetch }) => {
  const [apiData, loading, error, filter, setFilter, setRefetch] = useAPI(
    apiMethod,
    endpoint
  );
  useEffect(() => {
    if (triggerRefetch) {
      setRefetch(true);
    }
  }, [triggerRefetch, setRefetch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {apiData && <p>Data: {JSON.stringify(apiData)}</p>}
    </div>
  );
};

export { TestComponentAPI, TestComponentAccess };
