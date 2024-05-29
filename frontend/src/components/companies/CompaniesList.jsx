import SEO from "../SEO";
import Company from "./Company";
import useAPI from "../../hooks/useAPI";

function CompaniesList() {
  const [companies, loading, error] = useAPI("companies", "request");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.join(", ")}</div>;

  return (
    <>
      <SEO title="Companies" description="A list of companies" />
      <div>
        <ul>
          {companies.map((company) => (
            <Company
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default CompaniesList;
