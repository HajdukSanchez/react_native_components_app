import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../../components';
import { styles } from './ChangeThemeScreen.styles';

const ChangeThemeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

export { ChangeThemeScreen };
