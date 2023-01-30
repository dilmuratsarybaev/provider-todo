import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../store/TodoContext";
import { Todo } from "./Todo";

export const TodoList = () => {
  const context = useContext(TodoContext);

  return (
    <StyledUl>
      {context.todos.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  background-color: #fff;
  width: 25rem;
  margin: 0 auto;
  border-radius: 0.5rem;
`;
