import { Theme } from '@react-navigation/native';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ThemeActionType {
  SET_LIGHT_THEME = 'setLightTheme',
  SET_DARK_THEME = 'setDarkTheme',
}

export interface ThemeState extends Theme {
  currentTheme: ThemeType;
  dividerColor: string;
}
