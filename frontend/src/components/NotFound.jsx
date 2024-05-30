import { Link } from "react-router-dom";
import SEO from "./SEO";

const NotFound = () => {
  return (
    <section>
      <SEO title="404" description="404" />

      <h1>404</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Go Back to Home</Link>
    </section>
  );
};

export default NotFound;
