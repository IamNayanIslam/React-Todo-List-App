import { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../Reducer/TodoReducer";
import { getDataFromLocalStorage } from "../Utility/utility";

export const GlobalContext = createContext();

const INITIAL_STATE = {
  todos: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    TodoReducer,
    /* getDataFromLocalStorage("state") ||  */ INITIAL_STATE
  );

  /*  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]); */

  const values = { state, dispatch };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
