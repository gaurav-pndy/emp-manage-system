import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTasks from "../../others/AllTasks";

const AdmDashboard = ({ data }) => {
  return (
    <div className="h-screen w-full p-3 md:p-10">
      <Header data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdmDashboard;
