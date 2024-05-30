import { Link } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../tokenContext";

function NavBar() {
  const { currentUser } = useContext(TokenContext);

  return (
    <>
      <div>
        <h1>{currentUser.username}</h1>
        <Link to={`/`}>Jobly</Link>
      </div>
      {/* if user not login  */}
      <div>
        <Link to={`/login`}>Login</Link>
        <Link to={`/register`}>Register</Link>
      </div>
      {/* if user is login  */}
      <div>
        <div>{currentUser.username} v</div>
        <div>
          <div>{currentUser.username}</div>
          <Link to={`/users/${currentUser.username}`}>Edit profile</Link>
          <Link to={`/users/logout`}>Log out</Link>

          {/**if admin*/}
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
      </div>
    </>
  );
}

export default NavBar;
