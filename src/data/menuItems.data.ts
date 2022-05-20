import { MenuItemModel } from '../models/MenuItem.model';
import { ScreenNames } from '../routes/routes';

export const menuItems: MenuItemModel[] = [
  { name: 'Animation 101', icon: 'cube-outline', screenName: ScreenNames.Animation101 },
  { name: 'Animation 102', icon: 'albums-outline', screenName: ScreenNames.Animation102 },
  { name: 'Switch', icon: 'toggle-outline', screenName: ScreenNames.Switch },
  { name: 'Alert', icon: 'alert-circle-outline', screenName: ScreenNames.Alert },
  { name: 'Text Input', icon: 'document-text-outline', screenName: ScreenNames.TextInput },
  { name: 'Pull to refresh', icon: 'refresh-outline', screenName: ScreenNames.PullToRefresh },
  { name: 'Section List', icon: 'list-outline', screenName: ScreenNames.SectionList },
  { name: 'Modals', icon: 'copy-outline', screenName: ScreenNames.Modal },
  { name: 'Infinite Scroll', icon: 'download-outline', screenName: ScreenNames.Scroll },
  { name: 'Slides', icon: 'ellipsis-horizontal-circle-outline', screenName: ScreenNames.Slides },
  { name: 'Theme', icon: 'flask-outline', screenName: ScreenNames.ChangeTheme },
];
