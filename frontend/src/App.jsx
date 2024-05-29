import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// auth items
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// user items
import User from "./pages/users/User";
import UserList from "./pages/users/UserList";
import UserForm from "./pages/users/UserForm";
// Job items
import JobList from "./pages/jobs/JobList";
import JobForm from "./pages/jobs/JobForm";
import Job from "./pages/jobs/Job";
// company items
import CompaniesList from "./pages/companies/CompaniesList";
import CompanyForm from "./pages/companies/CompanyForm";
import Company from "./pages/companies/Company";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/companies">
              <Route index element={<CompaniesList />} />
              <Route path=":id" element={<Company />} />
              <Route path="new" element={<CompanyForm />} />
            </Route>

            <Route path="/jobs">
              <Route index element={<JobList />} />
              <Route path=":id" element={<Job />} />
              <Route path="new" element={<JobForm />} />
            </Route>

            <Route path="/users">
              <Route index element={<UserList />} />
              <Route path=":id" element={<User />} />
              <Route path="new" element={<UserForm />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
