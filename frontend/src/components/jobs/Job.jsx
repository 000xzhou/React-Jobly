import { Link } from "react-router-dom";

function Job({ id, title, companyName }) {
  const handleApplyClick = () => {
    console.log("here");
  };

  return (
    <div id={id}>
      <Link to={`/jobs/${id}`}>
        <h2>{title}</h2>
        <p>{companyName}</p>
      </Link>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
}

export default Job;
