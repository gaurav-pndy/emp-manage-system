import React, { useState, useEffect } from "react";
import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmpDashboard = ({ data, onUpdate }) => {
  // console.log(data);
  const [data2, setData2] = useState(data);

  const updateTask = (taskIndex, taskType) => {
    setData2((prevData) => {
      const updatedTasks = [...prevData.tasks];
      const task = updatedTasks[taskIndex];

      const newTaskCount = { ...prevData.taskCount };

      if (taskType === "completed") {
        task.active = false;
        task.completed = true;
        newTaskCount.active -= 1;
        newTaskCount.completed += 1;
      } else if (taskType === "failed") {
        task.active = false;
        task.failed = true;
        newTaskCount.active -= 1;
        newTaskCount.failed += 1;
      } else if (taskType === "accepted") {
        task.newTask = false;
        task.active = true;
        newTaskCount.newTask -= 1;
        newTaskCount.active += 1;
      }

      const updatedData = {
        tasks: updatedTasks,
        taskCount: newTaskCount,
      };

      onUpdate(data.id, updatedData);

      return updatedData;
    });
  };

  return (
    <div className="p-3 md:px-10 py-5 bg-[#1C1C1C] h-screen ">
      <Header data={data2} />
      <TaskListNumbers data={data2} />
      <TaskList data={data2} updateTask={updateTask} />
    </div>
  );
};

export default EmpDashboard;
