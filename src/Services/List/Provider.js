import React, { useReducer } from "react";
import ListContext from "./Context";
import listReducer from "./reducer";

function Provider({ children }) {
  const [tasks, dispatchToTasks] = useReducer(listReducer, []);
  return (
    <ListContext.Provider value={{ tasks, dispatchToTasks }}>
      {children}
    </ListContext.Provider>
  );
}

export default Provider;
