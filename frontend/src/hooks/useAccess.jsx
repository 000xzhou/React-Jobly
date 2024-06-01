import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";
import { useEffect, useState } from "react";

const useAccess = (username, accessType) => {
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (hasNavigated) return;

    if (!currentUser) {
      navigate("/login");
      setHasNavigated(true);
      return;
    }

    // user and admin only
    if (accessType === "user") {
      if (username.username !== currentUser.username && !currentUser.isAdmin) {
        navigate(`/`);
        setHasNavigated(true);
        return;
      }
    }

    // admin only
    if (accessType === "admin" && !currentUser.isAdmin) {
      navigate(`/`);
      setHasNavigated(true);
      return;
    }
  }, [currentUser, currentUser, accessType, navigate, hasNavigated]);

  return currentUser;
};

export default useAccess;
