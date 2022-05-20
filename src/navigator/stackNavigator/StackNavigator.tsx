import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { ScreenNames } from '../../routes/routes';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  ModalScreen,
  PullToRefreshScreen,
  ScrollScreen,
  SectionListScreen,
  SlideScreen,
  SwitchScreen,
  TextInputScreen,
} from '../../screens';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions}>
      <Screen name={ScreenNames.Home} component={HomeScreen} />
      <Screen name={ScreenNames.Alert} component={AlertScreen} />
      <Screen name={ScreenNames.Modal} component={ModalScreen} />
      <Screen name={ScreenNames.Slides} component={SlideScreen} />
      <Screen name={ScreenNames.Switch} component={SwitchScreen} />
      <Screen name={ScreenNames.Scroll} component={ScrollScreen} />
      <Screen name={ScreenNames.TextInput} component={TextInputScreen} />
      <Screen name={ScreenNames.SectionList} component={SectionListScreen} />
      <Screen name={ScreenNames.Animation101} component={Animation101Screen} />
      <Screen name={ScreenNames.Animation102} component={Animation102Screen} />
      <Screen name={ScreenNames.PullToRefresh} component={PullToRefreshScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
