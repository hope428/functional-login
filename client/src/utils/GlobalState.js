import React, { createContext, useContext } from "react";
import { useTodoReducer } from "./reducers";

const TodoContext = createContext();
const { Provider } = TodoContext;

const TodoProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useTodoReducer({
    todos: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodoContext };
