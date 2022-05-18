import { MenuItemModel } from '../models/MenuItem.model';
import { ScreenNames } from '../routes/routes';

export const menuItems: MenuItemModel[] = [
  { name: 'Animation 101', icon: 'cube-outline', screenName: ScreenNames.Animation101 },
  { name: 'Animation 102', icon: 'albums-outline', screenName: ScreenNames.Animation102 },
  { name: 'Switch', icon: 'toggle-outline', screenName: ScreenNames.Switch },
  { name: 'Alert', icon: 'alert-circle-outline', screenName: ScreenNames.Alert },
];
