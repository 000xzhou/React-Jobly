import { Link } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../tokenContext";

function NavBar() {
  const { currentUser } = useContext(TokenContext);
  console.log(currentUser);
  return (
    <>
      <div>
        <Link to={`/`}>Jobly</Link>
      </div>
      {/* if user not login  */}
      <div>
        <Link to={`/login`}>Login</Link>
        <Link to={`/register`}>Register</Link>
      </div>
      {currentUser && (
        <div>
          <div>{currentUser.username} v</div>
          <div>
            <div>{currentUser.username}</div>
            <Link to={`/users/${currentUser.username}`}>Edit profile</Link>
            <Link to={`/users/logout`}>Log out</Link>

            {currentUser.isAdmin ? (
              <div>
                <Link className="button" to={`/users`}>
                  List of users
                </Link>
                <Link className="button" to={`/jobs/new`}>
                  Create A Job
                </Link>
                <Link className="button" to={`/companies/new`}>
                  Create A Company
                </Link>
                <Link className="button" to={`/users/new`}>
                  Create A User
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
