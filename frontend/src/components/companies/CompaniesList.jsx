import SEO from "../SEO";
import Company from "./Company";
import useAPI from "../../hooks/useAPI";
import { useState } from "react";

function CompaniesList() {
  const [searchInput, setSearchInput] = useState("");

  const [companies, loading, error, setFilter] = useAPI("request", "companies");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // if input isn't empty filter it
    // * - minEmployees
    // * - maxEmployees
    // * - nameLike (will find case-insensitive, partial matches)
    if (e.target.value !== "") {
      setFilter({ name: e.target.value });
    } else {
      setFilter({});
    }
  };

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.join(", ")}</div>;

  return (
    <>
      <SEO title="Companies" description="A list of companies" />
      <div>
        <ul>
          <label htmlFor="searchCompany">Search for a company: </label>
          <input
            type="text"
            id="searchCompany"
            name="searchCompany"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />

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
