import React, { useCallback, useContext, useState } from "react";
import * as tasksActions from "../../Services/List/actions";
import TaskContext from "../../Services/List/Context";
import FilterContext from "../../Services/Filter/Context";
import Task from "../Task";
import TaskModal from "../TaskModal";

import { Container } from "./styles";

function filteredList(list, curFilter) {
  switch (curFilter) {
    case "all":
      return list;
    case "active":
      return list.filter((item) => {
        return item.completed === false;
      });
    case "completed":
      return list.filter((item) => {
        return item.completed === true;
      });
    default:
      throw new Error();
  }
}

function TasksList() {
  const { tasks, dispatchToTasks } = useContext(TaskContext);

  const handleTitleUpdate = useCallback(
    (id, title) => {
      dispatchToTasks(tasksActions.toggleTitle(id, title));
    },
    [dispatchToTasks]
  );

  const handleStatusUpdate = useCallback(
    (id, completed) => {
      dispatchToTasks(tasksActions.toggleStatus(id, completed));
    },
    [dispatchToTasks]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatchToTasks(tasksActions.removeTask(id));
    },
    [dispatchToTasks]
  );

  const [currentId, setCurrentId] = useState(null);

  const handleModalOpen = useCallback((id) => {
    setCurrentId(id);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurrentId(null);
  }, []);

  const getTitle = useCallback(
    (id) => {
      const currentTask = tasks.find((task) => {
        return task.id === id;
      });
      return currentTask.title;
    },
    [tasks]
  );

  const { filter } = useContext(FilterContext);

  return (
    <Container>
      <ul>
        {filteredList(tasks, filter).map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onModalOpen={handleModalOpen}
              onStatusUpdate={handleStatusUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      {currentId && (
        <TaskModal
          id={currentId}
          onModalClose={handleModalClose}
          onTitleUpdate={handleTitleUpdate}
          findTitle={getTitle}
        />
      )}
    </Container>
  );
}

export default TasksList;
