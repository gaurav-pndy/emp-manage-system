import React from "react";

const NewTask = ({ task, taskIndex, updateTask }) => {
  function handleAccept() {
    updateTask(taskIndex, "accepted");
  }

  return (
    <div
      id="newCard"
      className=" flex-shrink-0 w-[270px] md:w-[300px] h-[80%]  rounded-xl p-3 md:p-5"
    >
      <div className="flex justify-between items-center ">
        <h3 className="px-3 py-1 text-xs md:text-sm  rounded-lg bg-red-600">
          {task.category}
        </h3>
        <h4 className="text-xs md:text-sm"> {task.date} </h4>
      </div>

      <div className=" h-full flex flex-col justify-between ">
        <div>
          <h2 className="mt-5 mb-2 text-xl md:text-2xl font-semibold">
            {task.title}{" "}
          </h2>
          <p className="text-xs md:text-sm">{task.description}</p>
        </div>
        <div className=" mb-10 flex justify-between mt-5">
          <button
            id="markAccept"
            onClick={handleAccept}
            className=" mx-auto py-3 md:py-4 px-3 text-xs rounded-2xl w-[70%]"
          >
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
