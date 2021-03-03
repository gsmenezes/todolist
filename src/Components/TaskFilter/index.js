import React, { useCallback, useContext, useEffect, useState } from "react";
import FilterContext from "../../Services/Filter/Context";
import * as filterActions from "../../Services/Filter/actions";
import TaskSelect from "../TaskSelect";
import { Container } from "./styles";

function TasksFilter() {
  const { filter, dispatchToFilter } = useContext(FilterContext);
  const [selectValue, setSelectValue] = useState(filter);

  const handleOptionChange = useCallback(
    (e) => {
      setSelectValue(e.target.value);
    },
    [setSelectValue]
  );

  const updateFilter = useCallback(
    (filter) => {
      dispatchToFilter(filterActions.toggleFilter(filter));
    },
    [dispatchToFilter]
  );
  useEffect(() => {
    updateFilter(selectValue);
  }, [updateFilter, selectValue]);

  return (
    <Container>
      <TaskSelect
        value={selectValue}
        onOptionChange={handleOptionChange}
        options={[
          { value: "all", title: "Todas as tarefas" },
          { value: "active", title: "Tarefas pendentes" },
          { value: "completed", title: "Tarefas concluídas" },
        ]}
      />
    </Container>
  );
}

export default TasksFilter;
