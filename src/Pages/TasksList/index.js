import React from "react";
import TaskCreator from "../../Components/TaskCreator";
import TasksFilter from "../../Components/TaskFilter";

function TasksList() {
  return (
    <>
      <TaskCreator />
      <main>List</main>
     <TasksFilter />
    </>
  );
}

export default TasksList;
