import React from "react";
import { Container } from "./styles";

function TaskSelect({ value, onOptionChange, options }) {
  return (
    <Container>
      <select value={value} onChange={onOptionChange}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          );
        })}
      </select>
    </Container>
  );
}

export default TaskSelect;
