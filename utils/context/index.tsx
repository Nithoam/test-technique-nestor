import { useReducer, createContext } from "react";
import { mode } from "./reducers/mode";
import { StateProps } from "utils/interfaceProps";
import { initialState } from "./initialState";

export const Context: any = createContext({});

export const combineReducers =
  (...reducers: any[]) =>
  (state: StateProps, action: object) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(combineReducers(mode), initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
