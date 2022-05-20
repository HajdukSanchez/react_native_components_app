import React, { createContext } from 'react';

interface ThemeContextProps {
  theme: string;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const setDarkTheme = () => {};

  const setLightTheme = () => {};

  const returnValue: ThemeContextProps = {
    theme: 'light',
    setDarkTheme,
    setLightTheme,
  };

  return <ThemeContext.Provider value={returnValue}>{children}</ThemeContext.Provider>;
};
