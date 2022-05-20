import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'setLightTheme' } | { type: 'setDarkTheme' };
export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

interface ThemeReducerProps {
  state: ThemeState;
  action: ThemeAction;
}

const lightTheme: ThemeState = {
  dark: false,
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'red',
    background: 'blue',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = ({ state, action }: ThemeReducerProps): ThemeState => {
  switch (action.type) {
    case 'setLightTheme':
      return { ...lightTheme };
    case 'setDarkTheme':
      return { ...lightTheme };
    default:
      return state;
  }
};
