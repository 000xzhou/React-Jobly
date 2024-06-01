import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";
import useFormSubmit from "../../hooks/useFormSubmit";

function CompanyForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser.username, "admin");

  const initialState = {
    handle: "",
    name: "",
    description: "",
    numEmployees: "",
    logoUr: "",
  };

  const [formData, handleChange, handleSubmit] = useFormSubmit(
    initialState,
    "postNewCompany",
    "new"
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="handle">Handle: </label>
      <input
        type="text"
        name="handle"
        id="handle"
        value={formData.handle}
        onChange={handleChange}
      />
      <label htmlFor="name">Company Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="numEmployees">Employees Number: </label>
      <input
        type="number"
        name="numEmployees"
        id="numEmployees"
        value={formData.numEmployees}
        onChange={handleChange}
      />

      <button>Add new company</button>
    </form>
  );
}

export default CompanyForm;
