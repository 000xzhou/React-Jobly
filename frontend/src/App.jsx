import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
// auth items
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// user items
import User from "./components/users/User";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";
// job items
import JobList from "./components/jobs/JobList";
import JobForm from "./components/jobs/JobForm";
import JobDetails from "./components/jobs/JobDetails";
// company items
import CompaniesList from "./components/companies/CompaniesList";
import CompanyForm from "./components/companies/CompanyForm";
import CompanyDetails from "./components/companies/CompanyDetails";

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
              <Route path=":handle" element={<CompanyDetails />} />
              <Route path="new" element={<CompanyForm />} />
            </Route>

            <Route path="/jobs">
              <Route index element={<JobList />} />
              <Route path=":id" element={<JobDetails />} />
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
