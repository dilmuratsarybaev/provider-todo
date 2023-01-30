import styled from "styled-components";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./store/TodoContext";

function App() {
  return (
    <div>
      <TodoProvider>
        <Content>React Todo</Content>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;

const Content = styled.h1`
  margin-top: 2rem;
  text-align: center;
  color: #fff;
`;
