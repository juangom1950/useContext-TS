import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/Title";

export const Todo = () => {
  return (
    // Just what is inside of the provider has access to the Context.
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
