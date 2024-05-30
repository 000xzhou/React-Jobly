import { Link } from "react-router-dom";
import SEO from "./SEO";

function Home() {
  /* if login should redirect to users page */

  return (
    <>
      <SEO title="Jobly" description="Welcome to Jobly" />

      <div>
        <h1>Find a job at Jobly!</h1>
        <Link className="button" to={`/companies`}>
          Search by companies
        </Link>
        <Link className="button" to={`/jobs`}>
          Find your next job
        </Link>
      </div>
    </>
  );
}

export default Home;
