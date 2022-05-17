import React, { useRef } from 'react';
import { View, Animated } from 'react-native';

import { styles } from './Animation101Screen.styles';

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, opacity: opacity }} />
    </View>
  );
};

export { Animation101Screen };
