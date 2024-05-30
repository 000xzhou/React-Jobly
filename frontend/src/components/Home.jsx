import { Link } from "react-router-dom";
import SEO from "./SEO";
import { useContext } from "react";
import TokenContext from "../tokenContext";

function Home() {
  /* if login should redirect to users page */
  const { currentUser } = useContext(TokenContext);

  return (
    <>
      <SEO title="Jobly" description="Welcome to Jobly" />

      <div>
        {currentUser && <h2>Welcome {currentUser.username}!</h2>}
        <h1>Find a job at Jobly!</h1>
        <Link className="button" to={`/companies`}>
          Search by companies
        </Link>
        <Link className="button" to={`/jobs`}>
          Find your next job
        </Link>
      </div>

      {currentUser && currentUser.isAdmin ? (
        <>
          <h2>How can I help?</h2>
          <Link className="button" to={`/users`}>
            List of users
          </Link>
          <Link className="button" to={`/jobs/new`}>
            Create a Job
          </Link>
          <Link className="button" to={`/companies/new`}>
            Create a Company
          </Link>
          <Link className="button" to={`/users/new`}>
            Create a User
          </Link>
        </>
      ) : null}
    </>
  );
}

export default Home;
