import { ThemeActionType, ThemeState } from '../../models/theme.model';

type ThemeAction = { type: ThemeActionType.SET_LIGHT_THEME; payload: ThemeState } | { type: ThemeActionType.SET_DARK_THEME; payload: ThemeState };

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionType.SET_LIGHT_THEME:
      return { ...action.payload };
    case ThemeActionType.SET_DARK_THEME:
      return { ...action.payload };
    default:
      return state;
  }
};
