import React from "react";
import GlobalStyles from "./Styles/GlobalStyle";
import FilterProvider from "./Services/Filter/Provider";
import TasksProvider from "./Services/List/Provider";
import Home from './Pages/Home';

function App() {
  return (
    <>
      <TasksProvider>
        <FilterProvider>
          <GlobalStyles />
          <Home />
        </FilterProvider>
      </TasksProvider>
    </>
  );
}

export default App;
