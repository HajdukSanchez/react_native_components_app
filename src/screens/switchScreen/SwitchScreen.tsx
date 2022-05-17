import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './SwitchScreen.styles';
import { CustomSwitch, HeaderTitle } from '../../components';

const SwitchScreen = () => {
  const [switchData, setSwitchData] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  // Keyof Typeof allow us to send only values named equals to the key of the object.
  const onChange = (value: boolean, field: keyof typeof switchData) => {
    setSwitchData({
      ...switchData,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <CustomSwitch isOn={switchData.isActive} text="isActive" onChange={value => onChange(value, 'isActive')} />
      <CustomSwitch isOn={switchData.isHungry} text="isHungry" onChange={value => onChange(value, 'isHungry')} />
      <CustomSwitch isOn={switchData.isHappy} text="isHappy" onChange={value => onChange(value, 'isHappy')} />
      <Text style={styles.text}>{JSON.stringify(switchData, null, 5)}</Text>
    </View>
  );
};

export { SwitchScreen };
