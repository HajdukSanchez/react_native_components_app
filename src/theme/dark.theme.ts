import { ThemeState, ThemeType } from '../models/theme.model';

export const darkTheme: ThemeState = {
  dark: true,
  currentTheme: ThemeType.DARK,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75CEDB',
    background: 'rgba(54, 54, 54, 0.8)',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};
