import React from "react";
import GlobalStyles from "./Styles/GlobalStyle";
import FilterProvider from "./Services/Filter/Provider";
import TasksProvider from "./Services/List/Provider";
import TasksList from './Pages/TasksList';

function App() {
  return (
    <>
      <TasksProvider>
        <FilterProvider>
          <GlobalStyles />
          <TasksList />
        </FilterProvider>
      </TasksProvider>
    </>
  );
}

export default App;
