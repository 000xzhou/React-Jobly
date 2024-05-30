import SEO from "../SEO";
import Company from "./Company";
import useSearch from "../../hooks/useSearch";

function CompaniesList() {
  // * Can provide search filter in query:
  const initialState = {
    minEmployees: "",
    maxEmployees: "",
    name: "",
  };
  const [formData, handleChange, companies, loading, error] = useSearch(
    initialState,
    "request",
    "companies"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error.message}</div>;

  return (
    <>
      <SEO title="Companies" description="A list of companies" />
      <div>
        <form style={{ paddingLeft: "40px" }}>
          <label htmlFor="name">Search for a company: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search here"
            onChange={handleChange}
            value={formData.name}
          />
          <label htmlFor="minEmployees">Min Employees: </label>
          <input
            type="number"
            id="minEmployees"
            name="minEmployees"
            onChange={handleChange}
            value={formData.minEmployees}
          />
          <label htmlFor="maxEmployees">Max Employees: </label>
          <input
            type="number"
            id="maxEmployees"
            name="maxEmployees"
            onChange={handleChange}
            value={formData.maxEmployees}
          />
        </form>
        <ul>
          {companies.companies.map((company) => (
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
