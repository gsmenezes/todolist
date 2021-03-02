import React from "react";
import TaskCreator from "../../Components/TaskCreator";

function TasksList() {
  return (
    <>
      <TaskCreator />
      <main>List</main>
      <footer>Task Filter</footer>
    </>
  );
}

export default TasksList;
