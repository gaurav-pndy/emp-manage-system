import React, { useContext, useEffect, useState } from "react";
import Login from "./comps/Auth/Login";
import EmpDashboard from "./comps/Dashboard/EmpDashboard";
import AdmDashboard from "./comps/Dashboard/AdmDashboard";

import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userDataa = JSON.parse(loggedInUser);
      setUser(userDataa.role);
      setLoggedInUserData(userDataa.data);
    }
  }, []);

  function updateEmployeeDataInLocalStorage(employeeId, updatedData) {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeIndex = employees.findIndex((emp) => emp.id === employeeId);

    if (employeeIndex !== -1) {
      employees[employeeIndex] = {
        ...employees[employeeIndex],
        ...updatedData,
      };

      // Update employees in localStorage
      localStorage.setItem("employees", JSON.stringify(employees));

      // If this employee is the logged-in user, update loggedInUser as well
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser && loggedInUser.data.id === employeeId) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ ...loggedInUser, data: employees[employeeIndex] })
        );
      }
    }
  }

  function handleLogin(email, password) {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? (
        <AdmDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmpDashboard
          data={loggedInUserData}
          onUpdate={updateEmployeeDataInLocalStorage}
        />
      ) : null}
    </>
  );
};

export default App;
