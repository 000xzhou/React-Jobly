import { Link } from "react-router-dom";

function Company({ handle, name, description }) {
  return (
    <div>
      <Link to={`/companies/${handle}`}>
        <h2>{name}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default Company;
