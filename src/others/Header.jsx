import React from "react";
import CreateEmp from "./CreateEmp";

const Header = ({ data }) => {
  function handleLogOut() {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }
  return (
    <div id="header" className=" pb-3 flex items-end justify-between ">
      <h1 className="text-2xl ">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {" "}
          {data ? data.firstName : "Suresh"} 👋
        </span>
      </h1>

      <div className="flex">
        {!data ? <CreateEmp /> : null}

        <button
          onClick={handleLogOut}
          className="bg-red-700 rounded text-sm md:text-lg font-medium px-3 py-1 hover:bg-red-800 transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
