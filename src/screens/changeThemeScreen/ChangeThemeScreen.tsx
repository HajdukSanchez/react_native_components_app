import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { HeaderTitle } from '../../components';
import { styles } from './ChangeThemeScreen.styles';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    theme: { dark },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);

  const handleToogleTheme = () => {
    dark ? setLightTheme() : setDarkTheme();
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity style={styles.button} onPress={handleToogleTheme}>
        <Text style={styles.text}>{dark ? 'Light' : 'Dark'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { ChangeThemeScreen };
