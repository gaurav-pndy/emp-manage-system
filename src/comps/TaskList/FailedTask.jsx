import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div
      id="failedCard"
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
          <p className="text-xs md:text-sm">{task.category}</p>
        </div>
        <div className=" flex mb-10 justify-between mt-5">
          <span className="failedText py-3  md:text-lg  w-full text-center rounded mx-auto">
            Failed 👎
          </span>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
