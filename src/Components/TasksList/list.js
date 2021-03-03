import React, { useState, useEffect } from "react";

import { getTasks } from "../../Services/api";

import { Container } from "./styles";

function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getTasks()
      if (mounted) {
        setList();
        console.log();
      }
      return () => (mounted = false);
    }, []);

  return (
    <Container>
     <h1>test</h1>
    </Container>
  );
}

export default List;
