import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

// We create this useTdos to simplify the use of useContex through the components
export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);
  const { todos } = todoState;

  return {
    todos: todos,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
    toggleTodo,
  };
};
