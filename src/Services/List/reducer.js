import * as tasksTypes from "./types";

function reducer(state, action) {
  switch (action.type) {
    case tasksTypes.ADD_TASK:
      return state.concat({
       id: '',
        title: action.payload.title,
        completed: false,
      });
    case tasksTypes.TOGGLE_STATUS:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed,
          };
        } else {
          return task;
        }
      });
    case tasksTypes.TOGGLE_TITLE:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
          };
        } else {
          return task;
        }
      });
    case tasksTypes.REMOVE_TASK:
      return state.filter((task) => {
        return task.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

export default reducer;
