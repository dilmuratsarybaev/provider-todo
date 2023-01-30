import { createContext, useEffect, useReducer, useState } from "react";
import { Reducer } from "../Reducer";

export const TodoContext = createContext({
  inputText: "",
  setInputText: "",
  todos: null,
  dispathTodos: null,
  edit: false,
  setEdit: false,
  editingTodoId: null,
  setEditingTodoId: null,
  removeTodo: null,
  toggleComplete: null,
});
const initialState = JSON.parse(localStorage.getItem("AUTHO")) || { todos: [] };

export const TodoProvider = ({ children }) => {
    const [todos, dispathTodos] = useReducer(Reducer, initialState);
    const [inputText, setInputText] = useState("");
    const [edit, setEdit] = useState(false);
    const [editingTodoId, setEditingTodoId] = useState(null);
  
    useEffect(() => {
      localStorage.setItem("AUTHO", JSON.stringify(todos));
    }, [todos]);
  
    const toggleComplete = (id) => {
      dispathTodos({ type: "COMPLETE_TODO", id: id });
    };
  
    const removeTodo = (id) => {
      dispathTodos({ type: "DELETE_TODO", id: id });
    };

const state={
    inputText,
    setInputText,
    todos,
    dispathTodos,
    edit,
    setEdit,
    editingTodoId,
    setEditingTodoId,
    removeTodo,
    toggleComplete
}


  return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};
