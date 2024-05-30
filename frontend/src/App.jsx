import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
// auth items
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// user items
import UserDetails from "./components/users/UserDetails";
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

import { useState } from "react";
import TokenContext from "./tokenContext";

function App() {
  //need to change this to useContext
  const [currentUser, setCurrentUser] = useState(null);
  const updateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TokenContext.Provider value={{ currentUser, updateUser }}>
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
                <Route path=":username" element={<UserDetails />} />
                <Route path="new" element={<UserForm />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
