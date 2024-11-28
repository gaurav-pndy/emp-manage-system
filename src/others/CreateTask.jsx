"use client";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const task = {
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((elem) => {
      if (elem.firstName === assignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1,
          },
        };
      }
      return elem;
    });

    localStorage.setItem("employees", JSON.stringify(updatedData));
    setUserData(updatedData);

    setTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  }

  return (
    <>
      <h1 className="mt-7 text-xl font-semibold">Create Task</h1>
      <div className=" p-4 md:p-5 bg-[#1C1C1C] mt-2 rounded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            const userExists = userData.some(
              (emp) => emp.firstName === assignTo
            );
            toast({
              title: `${
                userExists
                  ? "New Task Assigned Successfully !"
                  : "Task Assignment Failed !"
              }`,
              description: `${
                userExists ? `Assigned to: ${assignTo}` : "No such User Exists"
              }`,
              className: `${userExists ? "bg-yellow-800 " : "bg-red-800"}`,
            });
          }}
          className=" flex flex-wrap w-full justify-between items-start flex-col md:flex-row"
        >
          <div className=" w-full md:w-1/2">
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Task Title</h3>
              <input
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Date</h3>
              <input
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="date"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Assign to</h3>
              <input
                required
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Category</h3>
              <input
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col items-start">
            <h3 className="font-semibold text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full h-32 md:h-full text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              rows="11"
            ></textarea>
            <button
              id="createTaskBtn"
              className=" px-5 py-2 rounded text-sm mt-4 w-full "
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
