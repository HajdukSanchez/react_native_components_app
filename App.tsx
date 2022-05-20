import React from 'react';
import { StatusBar } from 'react-native';

import { StackNavigator } from './src/navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

interface AppStateProps {
  children: React.ReactNode;
}

const App = () => {
  return (
    <_AppState>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <StackNavigator />
    </_AppState>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export { App };
