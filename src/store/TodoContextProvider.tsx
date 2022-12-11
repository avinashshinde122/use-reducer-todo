import React, { createContext, useContext } from "react";
import { TodoState } from "../Types";
import { getReducer } from "./reducer";

export const TodoContext = createContext<any[]>([]);

export const useTodoContext = (): [state: TodoState, dispatch: () => {}] =>
  useContext<any>(TodoContext);

type TodoContextProviderProps = {
  children: React.ReactNode;
};
const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = getReducer();
  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
