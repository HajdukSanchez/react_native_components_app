import React, { useContext, useState } from 'react';
import { Switch, View, Text } from 'react-native';

import { styles } from './CustomSwitch.styles';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface CustomSwitchProps {
  isOn: boolean;
  text: string;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, text, onChange }: CustomSwitchProps) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: colors.text }}>{text}</Text>
      <Switch
        trackColor={{ false: '#D9D9DB', true: '#81b0ff' }}
        thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export { CustomSwitch };
