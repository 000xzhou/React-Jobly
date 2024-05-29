import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </section>
  );
};

export default NotFound;
