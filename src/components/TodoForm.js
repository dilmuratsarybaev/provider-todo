import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../store/TodoContext";

export const TodoForm = () => {
  const context = useContext(TodoContext);

  const inputChangeHandler = (event) => {
    context.setInputText(event.target.value);
  };
  const submitHandle = (event) => {
    event.preventDefault();
    context.dispathTodos({
      type: "ADD_TODO",
      payload: {
        task: context.inputText,
        id: Math.random().toString(),
        complete: false,
      },
    });
    context.setInputText("");
  };

  const saveEditedTodo = (e) => {
    e.preventDefault();
    context.dispathTodos({
      type: "EDIT_TODO",
      inputText: context.inputText,
      editingTodoId: context.editingTodoId,
    });
    context.setEdit(false);
    context.setInputText("");
  };

  return (
    <StyledForm>
      <StyledInput
        name="task"
        type="text"
        value={context.inputText}
        onChange={inputChangeHandler}
      />
      {context.edit ? (
        <StyledButton
          type="submit"
          onClick={saveEditedTodo}
          disabled={!context.inputText}
        >
          Update
        </StyledButton>
      ) : (
        <StyledButton
          type="submit"
          onClick={submitHandle}
          disabled={!context.inputText}
        >
          Submit
        </StyledButton>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 25rem;
  background-color: #fff;
  margin: 2rem auto;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: none;
`;
const StyledInput = styled.input`
  border: 2px solid green;
  margin-right: 1rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  width: 17rem;
`;

const StyledButton = styled.button`
  background-color: green;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  &:focus {
    color: green;
    background-color: black;
  }
`;
