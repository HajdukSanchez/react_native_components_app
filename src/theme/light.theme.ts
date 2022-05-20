import { ThemeState, ThemeType } from '../models/theme.model';

export const lightTheme: ThemeState = {
  dark: false,
  currentTheme: ThemeType.LIGHT,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'rgba(255, 248, 241, 0.8)',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};
