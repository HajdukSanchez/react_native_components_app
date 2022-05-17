import React, { useState } from 'react';
import { Switch, View } from 'react-native';

import { styles } from './SwitchScreen.styles';
import { HeaderTitle } from '../../components';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
        <Switch
          trackColor={{ false: '#D9D9DB', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  );
};

export { SwitchScreen };
