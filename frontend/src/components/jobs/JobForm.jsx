import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";

function JobForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser.username, "admin");

  return (
    <>
      <div>JobForm</div>
    </>
  );
}

export default JobForm;
