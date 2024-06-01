import useAccess from "../../hooks/useAccess";
import { useUser } from "../../UserProvider";
import useFormSubmit from "../../hooks/useFormSubmit";

function JobForm() {
  const { currentUser } = useUser();

  const user = useAccess(currentUser.username, "admin");

  const initialState = {
    title: "",
    salary: "",
    equity: "",
    companyHandle: "",
  };

  const [formData, handleChange, handleSubmit] = useFormSubmit(
    initialState,
    "postNewJob",
    "new"
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="salary">Salary: </label>
      <input
        type="number"
        name="salary"
        id="salary"
        value={formData.salary}
        onChange={handleChange}
      />
      <label htmlFor="equity">Equity: </label>
      <input
        type="text"
        name="equity"
        id="equity"
        placeholder="0-0.9"
        value={formData.equity}
        onChange={handleChange}
      />
      <label htmlFor="companyHandle">Employees Handle: </label>
      <input
        type="text"
        name="companyHandle"
        id="companyHandle"
        value={formData.companyHandle}
        onChange={handleChange}
      />

      <button>Add new job</button>
    </form>
  );
}

export default JobForm;
