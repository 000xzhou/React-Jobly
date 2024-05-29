import { Link } from "react-router-dom";
function Home() {
  /* if login should redirect to users page */

  return (
    <div>
      <h1>Find a job at Jobly!</h1>
      <Link className="button" to={`/companies`}>
        Look for companies
      </Link>
      <Link className="button" to={`/jobs`}>
        Find your next job
      </Link>
    </div>
  );
}

export default Home;
