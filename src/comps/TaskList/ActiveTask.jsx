import React from "react";

const ActiveTask = ({ task, taskIndex, updateTask }) => {
  function handleClick(e) {
    if (e.target.innerHTML == "Mark as Completed") {
      updateTask(taskIndex, "completed");
    } else {
      updateTask(taskIndex, "failed");
    }
  }

  return (
    <div
      id="activeCard"
      className="flex-shrink-0 w-[270px] md:w-[300px] h-[80%]  rounded-xl p-3 md:p-5"
    >
      <div className="flex justify-between items-center">
        <h3 className="px-3 py-1 text-xs md:text-sm rounded-lg bg-red-600">
          {task.category}
        </h3>
        <h4 className=" text-xs md:text-sm">{task.date}</h4>
      </div>

      <div className=" h-full flex flex-col justify-between ">
        <div>
          <h2 className="mt-5 mb-2 text-xl md:text-2xl font-semibold">
            {task.title}
          </h2>
          <p className="text-xs md:text-sm">{task.description}</p>
        </div>
        <div className="flex gap-2 justify-between mt-5 mb-10">
          <button
            id="markComp"
            onClick={(e) => handleClick(e)}
            className="py-3 md:py-4 px-3 text-xs rounded-2xl"
          >
            Mark as Completed
          </button>
          <button
            id="markFailed"
            onClick={(e) => handleClick(e)}
            className="py-3 md:py-4 px-3 text-xs rounded-2xl "
          >
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;
