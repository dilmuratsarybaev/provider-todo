export const Reducer = (prevState, action) => {
  console.log(prevState.todos);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...prevState,
        todos: [...prevState.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== action.id),
      };
    case "COMPLETE_TODO":
      return {
        ...prevState,
        todos: prevState.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case "EDIT_TODO":
      return {
        ...prevState,
        todos: prevState.todos.map((todo) =>
          todo.id === action.editingTodoId
            ? { ...todo, task: action.inputText }
            : todo
        ),
      };
    default:
      return prevState;
  }
};
