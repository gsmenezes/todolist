import React from "react";
import GlobalStyles from "./Styles/GlobalStyle";
import FilterProvider from "./Services/Filter/Provider";
import TasksProvider from "./Services/List/Provider";

function App() {
  return (
    <>
      <TasksProvider>
        <FilterProvider>
          <GlobalStyles />
          <h1>Teste</h1>
        </FilterProvider>
      </TasksProvider>
    </>
  );
}

export default App;
