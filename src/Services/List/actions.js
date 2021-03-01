import * as tasksTypes from "./types";

export function addTask(title) {
  return {
    type: tasksTypes.ADD_TASK,
    payload: {
      title,
    },
  };
}

export function toggleStatus(id, completed) {
  return {
    type: tasksTypes.TOGGLE_STATUS,
    payload: {
      id,
      completed,
    },
  };
}

export function toggleTitle(id, title) {
  return {
    type: tasksTypes.TOGGLE_TITLE,
    payload: {
      id,
      title,
    },
  };
}

export function removeTask(id) {
  return {
    type: tasksTypes.REMOVE_TASK,
    payload: {
      id,
    },
  };
}
