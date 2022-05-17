import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { ScreenNames } from '../../routes/routes';
import { Animation101Screen, Animation102Screen, HomeScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions}>
      <Screen name={ScreenNames.Home} component={HomeScreen} />
      <Screen name={ScreenNames.Animation101} component={Animation101Screen} />
      <Screen name={ScreenNames.Animation102} component={Animation102Screen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
