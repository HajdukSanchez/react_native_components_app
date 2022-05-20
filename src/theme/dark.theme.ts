import { ThemeState, ThemeType } from '../models/theme.model';

export const darkTheme: ThemeState = {
  dark: true,
  currentTheme: ThemeType.DARK,
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
