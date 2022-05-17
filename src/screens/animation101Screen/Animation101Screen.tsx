import React, { useState } from 'react';
import { View, Animated, Button } from 'react-native';

import { useAnimation } from '../../hooks';
import { styles } from './Animation101Screen.styles';

const Animation101Screen = () => {
  const [showBox, setShowBox] = useState(false);
  const { opacity, position, fadeIn, fadeOut, movePosition } = useAnimation();

  const handleShowBox = () => {
    fadeIn();
    movePosition(-100, 0, 1000);
    setShowBox(true);
  };

  const handleHideBox = () => {
    fadeOut(800);
    movePosition(0, -100, 1000);
    setShowBox(false);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, opacity: opacity, transform: [{ translateY: position }] }} />
      {!showBox && (
        <View style={styles.button}>
          <Button title="Show Box" onPress={handleShowBox} />
        </View>
      )}
      {showBox && (
        <View style={styles.button}>
          <Button title="Hide Box" onPress={handleHideBox} />
        </View>
      )}
    </View>
  );
};

export { Animation101Screen };
