import { darkTheme, lightTheme } from '../../theme';
import { ThemeActionType, ThemeState } from '../../models/theme.model';

type ThemeAction = { type: ThemeActionType.SET_LIGHT_THEME } | { type: ThemeActionType.SET_DARK_THEME };

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionType.SET_LIGHT_THEME:
      return { ...lightTheme };
    case ThemeActionType.SET_DARK_THEME:
      return { ...darkTheme };
    default:
      return state;
  }
};
