"use client";

import { useToast } from "@/hooks/use-toast";
import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuthContext } from "@/context/AuthProvider";

const CreateEmp = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const { toast } = useToast();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const newEmp = {
      id: Date.now(),
      firstName,
      email,
      password,
      tasks: [],
      taskCount: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    };

    // console.log(newEmp);

    const existingEmployee = userData.find((emp) => emp.email === email);
    if (existingEmployee) {
      return;
    }

    const updatedEmpArr = [...userData, newEmp];

    localStorage.setItem("employees", JSON.stringify(updatedEmpArr));
    setUserData(updatedEmpArr);

    setFirstName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border text-sm border-white md:text-lg  px-3 py-1 mr-5 rounded hover:text-black hover:bg-gray-300 transition-all duration-300">
          + Add New Employee
        </button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle>Create a New Employee</DialogTitle>
          <DialogDescription>Enter the details of employee:</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            submitHandler(e);
            const userExists = userData.some((emp) => emp.email === email);
            console.log(userExists);

            toast({
              title: `${
                userExists
                  ? "Employee Creation Failed !"
                  : "New Employee Added Successfully !"
              }`,
              description: `${
                userExists
                  ? "Employee already exists. Try a different email"
                  : `Employee Name: ${firstName}`
              }`,
              className: `${userExists ? "bg-red-800 " : "bg-yellow-800"}`,
            });
          }}
          className="flex flex-col px-5 gap-3"
        >
          <div className=" ">
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">
                Employee Name
              </h3>
              <input
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full  h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Enter name of the employee"
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Email</h3>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full  h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="text"
                placeholder="Enter the email of employee"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Password</h3>
              <input
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full  h-10 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Create a password for employee"
              />
            </div>
          </div>
          <button className="bg-purple-950  px-4 py-3 rounded hover:bg-transparent border border-purple-950 transition-all duration-300">
            Create Employee
          </button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEmp;
