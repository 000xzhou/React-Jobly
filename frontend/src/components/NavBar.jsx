import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import TokenContext from "../tokenContext";
import JoblyApi from "../api/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";

function NavBar() {
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const handleLogout = () => {
    // remove ucurrentUser and jobly api from localstroage
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = "";
    // redirect to home page
    navigate(`/`);
  };

  return (
    <nav>
      <div>
        <Link to={`/`}>Jobly</Link>
      </div>
      {!currentUser ? (
        <div>
          <Link to={`/login`}>Login</Link>
          <Link to={`/register`}>Register</Link>
        </div>
      ) : (
        <div>
          <div onClick={toggleDropdown} className="dropdownMenu">
            {currentUser.username} {dropdown ? "^" : "v"}
          </div>
          <div
            className="dropdownItem"
            style={{ display: dropdown ? "flex" : "none" }}
          >
            <Link
              onClick={toggleDropdown}
              to={`/users/${currentUser.username}`}
            >
              Edit profile
            </Link>
            <button onClick={handleLogout}>Log out</button>

            {currentUser.isAdmin ? (
              <>
                <Link onClick={toggleDropdown} className="navBtn" to={`/users`}>
                  List of users
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="navBtn"
                  to={`/jobs/new`}
                >
                  Create a Job
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="navBtn"
                  to={`/companies/new`}
                >
                  Create a Company
                </Link>
                <Link
                  onClick={toggleDropdown}
                  className="navBtn"
                  to={`/users/new`}
                >
                  Create a User
                </Link>
              </>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
