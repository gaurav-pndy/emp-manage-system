import React from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, updateTask }) => {
  return (
    <>
      <h1 className="mt-10 text-xl font-semibold">Tasks</h1>
      <div
        id="classList"
        className="flex items-center justify-start gap-5 md:gap-12 h-[50%] md:h-[60%] w-full overflow-x-auto mt-[-25px]  "
      >
        {data.tasks.length !== 0 ? (
          data.tasks.map((task, idx) => {
            if (task.active) {
              return (
                <ActiveTask
                  key={idx}
                  task={task}
                  taskIndex={idx}
                  updateTask={updateTask}
                />
              );
            }
            if (task.newTask) {
              return (
                <NewTask
                  key={idx}
                  task={task}
                  taskIndex={idx}
                  updateTask={updateTask}
                />
              );
            }
            if (task.completed) {
              return <CompleteTask key={idx} task={task} />;
            }
            if (task.failed) {
              return <FailedTask key={idx} task={task} />;
            }
          })
        ) : (
          <h1 className="text-center w-full text-4xl text-gray-500 font-bold">
            No Tasks Yet
          </h1>
        )}
      </div>
    </>
  );
};

export default TaskList;
