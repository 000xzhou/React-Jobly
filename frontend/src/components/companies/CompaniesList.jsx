import SEO from "../SEO";
import React, { useState, useEffect } from "react";
import JoblyApi from "../../api/api";
import Company from "./Company";

function CompaniesList() {
  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.request("companies");
        setCompanies(companyData.companies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

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
