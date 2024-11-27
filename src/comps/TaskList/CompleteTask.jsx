import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div
      id="compCard"
      className=" flex-shrink-0 w-[270px] md:w-[300px] h-[80%] rounded-xl p-3 md:p-5"
    >
      <div className="flex justify-between items-center ">
        <h3 className="px-3 py-1 text-xs md:text-sm rounded-lg bg-red-600">
          {task.category}{" "}
        </h3>
        <h4 className="text-xs md:text-sm"> {task.date} </h4>
      </div>

      <div className=" h-full flex-col justify-between flex">
        <div>
          <h2 className="mt-5 mb-2 text-xl md:text-2xl font-semibold">
            {task.title}{" "}
          </h2>
          <p className="text-xs md:text-sm">{task.description}</p>
        </div>
        <div className=" mb-10 flex justify-between mt-8">
          <span className="compText py-3  md:text-lg w-full text-center rounded mx-auto">
            Completed 👍
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
