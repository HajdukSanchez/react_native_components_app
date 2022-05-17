import React, { useRef, useState } from 'react';
import { View, Animated, Button } from 'react-native';

import { styles } from './Animation101Screen.styles';

const Animation101Screen = () => {
  const [isShowed, setIsShowed] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // The callback in the start is a fuction to we running when the animation is done.
    Animated.timing(opacity, { toValue: 1, duration: 300, useNativeDriver: true }).start(() => setIsShowed(true));
  };

  const fadeOut = () => {
    Animated.timing(opacity, { toValue: 0, duration: 300, useNativeDriver: true }).start(() => setIsShowed(false));
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, opacity: opacity }} />
      {!isShowed && (
        <View style={styles.button}>
          <Button title="Fade IN" onPress={fadeIn} />
        </View>
      )}
      {isShowed && (
        <View style={styles.button}>
          <Button title="Fade OUT" onPress={fadeOut} />
        </View>
      )}
    </View>
  );
};

export { Animation101Screen };
