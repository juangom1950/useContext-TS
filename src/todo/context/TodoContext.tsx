import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
};

// with the "as TodoContestProps" we are telling javascript yes this
// parameter object is of type TodoContextProps
export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
