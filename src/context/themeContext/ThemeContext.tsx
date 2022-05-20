import React, { createContext, useReducer } from 'react';

import { lightTheme } from '../../theme';
import { themeReducer } from './themeReducer';
import { ThemeActionType, ThemeState } from '../../models/theme.model';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({ type: ThemeActionType.SET_DARK_THEME });
  };

  const setLightTheme = () => {
    dispatch({ type: ThemeActionType.SET_LIGHT_THEME });
  };

  const returnValue: ThemeContextProps = {
    theme,
    setDarkTheme,
    setLightTheme,
  };

  return <ThemeContext.Provider value={returnValue}>{children}</ThemeContext.Provider>;
};
