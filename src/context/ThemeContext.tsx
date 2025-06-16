import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";
import { themeReducer, initialState } from "../reducer/themeReducer";
import { type ThemeState, type ThemeAction } from "../reducer/themeReducer";

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}>({ state: initialState, dispatch: () => null });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)