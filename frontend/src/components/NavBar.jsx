import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import TokenContext from "../tokenContext";

function NavBar() {
  const { currentUser } = useContext(TokenContext);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };
  console.log(dropdown);

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
            {currentUser.username} v
          </div>
          <div
            className="dropdownItem"
            style={{ display: dropdown ? "flex" : "none" }}
          >
            <Link to={`/users/${currentUser.username}`}>Edit profile</Link>
            <Link to={`/users/logout`}>Log out</Link>

            {currentUser.isAdmin ? (
              <>
                <Link className="navBtn" to={`/users`}>
                  List of users
                </Link>
                <Link className="navBtn" to={`/jobs/new`}>
                  Create A Job
                </Link>
                <Link className="navBtn" to={`/companies/new`}>
                  Create A Company
                </Link>
                <Link className="navBtn" to={`/users/new`}>
                  Create A User
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
