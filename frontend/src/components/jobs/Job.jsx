import { Link } from "react-router-dom";

function Job({ id, title, companyName }) {
  return (
    <div id={id}>
      <Link to={`/jobs/${id}`}>
        <h2>{title}</h2>
        <p>{companyName}</p>
      </Link>
    </div>
  );
}

export default Job;
