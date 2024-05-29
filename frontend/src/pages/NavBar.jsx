import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <Link to={`/login`}>Login</Link>
        <Link to={`/register`}>Register</Link>
      </div>
      <div>
        <div>username v</div>
        <div>
          <div>username</div>
          <Link to={`/users/username`}>Edit profile</Link>
          <Link to={`/users/logout`}>Log out</Link>

          {/**if admin*/}
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
