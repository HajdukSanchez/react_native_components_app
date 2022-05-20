import React, { createContext, useEffect, useReducer, useRef } from 'react';

import { themeReducer } from './themeReducer';
import { darkTheme, lightTheme } from '../../theme';
import { ThemeActionType, ThemeState } from '../../models/theme.model';
import { Appearance, AppState, useColorScheme, Platform } from 'react-native';

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
  const colorScheme = useColorScheme();
  const themeSO = useRef<ThemeState>(colorScheme === 'dark' ? darkTheme : lightTheme);
  const [theme, dispatch] = useReducer(themeReducer, themeSO.current);

  // This works in two platforms
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light' ? setLightTheme() : setDarkTheme();
      }
    });
  }, []);

  // This only works on IOS
  // useEffect(() => {
  //   colorScheme === 'dark' ? (themeSO.current = darkTheme) : (themeSO.current = lightTheme);
  // }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({ type: ThemeActionType.SET_DARK_THEME, payload: darkTheme });
  };

  const setLightTheme = () => {
    dispatch({ type: ThemeActionType.SET_LIGHT_THEME, payload: lightTheme });
  };

  const returnValue: ThemeContextProps = {
    theme,
    setDarkTheme,
    setLightTheme,
  };

  return <ThemeContext.Provider value={returnValue}>{children}</ThemeContext.Provider>;
};
