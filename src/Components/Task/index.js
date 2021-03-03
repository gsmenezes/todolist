import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as UpdateTitle } from "../../assets/update-icon.svg";
import { ReactComponent as DeleteTask } from "../../assets/delete-icon.svg";
import { Container, ControlButtons } from "./styles";

function Task({ id, completed, title, onModalOpen, onStatusUpdate, onDelete }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleChange = useCallback((e) => {
    setIsChecked(e.target.value);
  }, []);
  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [onStatusUpdate, id, isChecked]);

  const handleModalOpen = useCallback(() => {
    onModalOpen(id);
  }, [onModalOpen, id]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <Container>
      <span className={completed ? ".complete" : null}>{title}</span>
      <ControlButtons>
        <button onClick={handleModalOpen}>
          <UpdateTitle />
        </button>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <button onClick={handleDelete}>
          <DeleteTask />
        </button>
      </ControlButtons>
    </Container>
  );
}

export default Task;
