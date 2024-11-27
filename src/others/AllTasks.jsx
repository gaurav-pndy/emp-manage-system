import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [expandedEmpIdx, setExpandedEmpIdx] = useState(null);

  function showTasksHandler(idx) {
    if (expandedEmpIdx === idx) {
      setExpandedEmpIdx(null);
    } else {
      setExpandedEmpIdx(idx);
    }
  }

  return (
    <>
      <h1 className="mt-7 text-xl font-semibold">All Activity</h1>
      <div id="allTasks" className="p-2 bg-[#1c1c1c] mt-2 rounded ">
        <div className=" mb-2 py-2 px-4 hidden md:flex justify-between rounded text-center mr-12  ">
          <h2 className="text-lg font-medium w-1/5 pr-7">Employee</h2>
          <h2 className="text-lg font-medium w-1/5 pr-4">New Tasks</h2>
          <h2 className="text-lg font-medium w-1/5 pr-2 ">Active Tasks</h2>
          <h2 className="text-lg font-medium w-1/5 ">Completed Tasks</h2>
          <h2 className="text-lg font-medium w-1/5 ">Failed Tasks</h2>
        </div>
        <div className="md:hidden  mt-2 text-[10px] grid grid-cols-2  gap-1 gap-y-5">
          <div>
            <span className="newTasks py-1 px-5 "></span>
            <span>&nbsp; : New Task</span>
          </div>
          <div>
            <span className="activeTasks py-1 px-5 "></span>
            <span>&nbsp; : Active Task</span>
          </div>
          <div>
            <span className="compTasks py-1 px-5 "></span>
            <span>&nbsp; : Completed Task</span>
          </div>

          <div>
            {" "}
            <span className="failedTasks py-1 px-5 "></span>
            <span>&nbsp; : Failed Task</span>
          </div>
        </div>
        <div>
          {userData.map((emp, idx) => {
            return (
              <div key={idx}>
                <div className="bg-[#19191c] mt-6 md:mt-0 mb-1 md:mb-2  flex justify-between rounded text-center border border-gray-700 ">
                  <h2 className="text-sm md:text-md w-1/5 py-2 md:py-3 px-2 md:px-4 ">
                    {emp.firstName}
                  </h2>
                  <h2 className=" newTasks text-sm md:text-md w-1/5 py-2 md:py-3 px-2 md:px-4 ">
                    {emp.taskCount.newTask}{" "}
                  </h2>
                  <h2 className=" activeTasks text-sm md:text-md w-1/5 py-2 md:py-3 px-2 md:px-4 ">
                    {emp.taskCount.active}{" "}
                  </h2>
                  <h2 className=" compTasks text-sm md:text-md w-1/5 py-2 md:py-3 px-2 md:px-4 ">
                    {emp.taskCount.completed}{" "}
                  </h2>
                  <h2 className=" failedTasks text-sm md:text-md w-1/5 py-2 md:py-3 px-2 md:px-4 ">
                    {emp.taskCount.failed}{" "}
                  </h2>
                  <div
                    className="hover:bg-[#0c0c0f] content-center transition-all duration-300 cursor-pointer "
                    onClick={() => showTasksHandler(idx)}
                  >
                    <span className=" px-2 md:px-4 text-xs  ">➕</span>
                  </div>
                </div>
                <div
                  className={`mb-6 transition-all duration-700 ${
                    expandedEmpIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {expandedEmpIdx === idx && (
                    <div>
                      {emp.tasks.map((task, idx2) => {
                        return (
                          <div
                            key={idx2}
                            className="flex px-2 md:px-12 mx-1 md:mx-2 border border-gray-700 justify-around mb-2 rounded bg-[#282323] text-[10px] md:text-sm"
                          >
                            <h2 className=" py-2 md:pl-7 w-1/3">
                              <strong>Task:</strong> &nbsp;
                              {task.title}{" "}
                            </h2>
                            <h2 className=" py-2 w-1/3 text-center ">
                              <strong> Due Date: </strong> &nbsp;
                              {task.date}
                            </h2>
                            <h2 className=" py-2 w-1/3 text-right ">
                              <strong>Status:</strong> &nbsp;{" "}
                              {task.newTask
                                ? "New Task"
                                : task.active
                                ? "Active"
                                : task.completed
                                ? "Completed"
                                : task.failed
                                ? "Failed"
                                : "Error"}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTasks;
