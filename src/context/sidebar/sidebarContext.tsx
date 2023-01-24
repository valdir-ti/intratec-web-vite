import { createContext, Dispatch, useReducer } from "react";
import {
  initialState,
  sidebarReducer,
  Action,
  AppState,
} from "./sidebarReducer";

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

function SidebarProvider({ children }: SidebarProviderProps) {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarContext, SidebarProvider };
