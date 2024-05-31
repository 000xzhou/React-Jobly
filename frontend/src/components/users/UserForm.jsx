import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";

function UserForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser.username, "admin");

  if (!user) {
    return null;
  }

  return (
    <>
      <div>UserForm</div>
    </>
  );
}

export default UserForm;
