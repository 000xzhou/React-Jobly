import { Link } from "react-router-dom";
import { useUser } from "../../UserProvider";
import JobUser from "./jobuser";

function Job({ id, title, companyName }) {
  const { user, currentUser } = useUser();

  return (
    <div id={id}>
      <Link to={`/jobs/${id}`}>
        <h2>{title}</h2>
        <p>{companyName}</p>
      </Link>
      {currentUser && user && <JobUser id={id} />}
    </div>
  );
}

export default Job;
