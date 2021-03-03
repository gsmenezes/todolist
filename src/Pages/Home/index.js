import React from "react";
import TaskCreator from "../../Components/TaskCreator";
import TasksFilter from "../../Components/TaskFilter";
import TasksList from '../../Components/TasksList';

function Home() {
  return (
    <>
      <TaskCreator />
      <TasksList />
     <TasksFilter />
    </>
  );
}

export default Home;
