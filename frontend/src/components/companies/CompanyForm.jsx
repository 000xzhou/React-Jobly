import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";

function CompanyForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser.username, "admin");

  return (
    <>
      <div>CompanyForm</div>
    </>
  );
}

export default CompanyForm;
