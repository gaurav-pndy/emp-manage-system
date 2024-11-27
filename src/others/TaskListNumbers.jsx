import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <>
      <h1 className="mt-5 text-xl font-semibold">Dashboard</h1>
      <div className="flex flex-wrap md:flex-nowrap mt-3 justify-between gap-y-5  md:gap-5 screen">
        <div className=" newTasks px-5 md:px-9 py-3 md:py-6 w-[48%]  rounded-xl">
          <h2 className=" text-2xl md:text-3xl font-semibold">
            {data.taskCount.newTask}
          </h2>
          <h3 className=" text-lg md:text-xl font-medium">New Tasks</h3>
        </div>

        <div className=" activeTasks px-5 md:px-9 py-3 md:py-6 w-[48%] rounded-xl">
          <h2 className=" text-2xl md:text-3xl font-semibold">
            {data.taskCount.active}
          </h2>
          <h3 className="text-lg md:text-xl font-medium">Active Tasks</h3>
        </div>
        <div className=" compTasks px-5 md:px-9 py-3 md:py-6 w-[48%] rounded-xl">
          <h2 className=" text-2xl md:text-3xl font-semibold">
            {data.taskCount.completed}
          </h2>
          <h3 className="text-lg md:text-xl font-medium">Completed Tasks</h3>
        </div>
        <div className=" failedTasks px-5 md:px-9 py-3 md:py-6 w-[48%]  rounded-xl">
          <h2 className=" text-2xl md:text-3xl font-semibold">
            {data.taskCount.failed}
          </h2>
          <h3 className="text-lg md:text-xl font-medium">Failed Tasks</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
