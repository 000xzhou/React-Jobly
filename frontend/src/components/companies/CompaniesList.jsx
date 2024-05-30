import SEO from "../SEO";
import Company from "./Company";
import useAPI from "../../hooks/useAPI";
import { useState } from "react";

function CompaniesList() {
  const initialState = {
    minEmployees: "",
    maxEmployees: "",
    name: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [companies, loading, error, filter, setFilter] = useAPI(
    "request",
    "companies"
  );

  const handleChange = (e) => {
    e.preventDefault();

    // * - minEmployees
    // * - maxEmployees
    // * - nameLike (will find case-insensitive, partial matches)
    // Update filter
    let updatedFilter = {
      ...filter,
      [e.target.name]: e.target.value,
    };

    // update form
    setFormData(updatedFilter);

    // Remove keys with empty values from the filter if val is empty before sending to api
    if (e.target.value === "") {
      delete updatedFilter[e.target.name];
    }

    // get api
    setFilter(updatedFilter);
  };

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
          />{" "}
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
