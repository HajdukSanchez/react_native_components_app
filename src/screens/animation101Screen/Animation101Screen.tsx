import React, { useRef, useState } from 'react';
import { View, Animated, Button, Easing } from 'react-native';

import { styles } from './Animation101Screen.styles';

const Animation101Screen = () => {
  const [showBox, setShowBox] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    // The callback in the start is a fuction to we running when the animation is done.
    Animated.timing(opacity, { toValue: 1, duration: 300, useNativeDriver: true }).start(() => setShowBox(true));
    Animated.timing(top, { toValue: 0, duration: 1000, useNativeDriver: true, easing: Easing.bounce }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, { toValue: 0, duration: 800, useNativeDriver: true }).start(() => setShowBox(false));
    Animated.timing(top, { toValue: -100, duration: 1000, useNativeDriver: true, easing: Easing.bounce }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, opacity: opacity, transform: [{ translateY: top }] }} />
      {!showBox && (
        <View style={styles.button}>
          <Button title="Fade IN" onPress={fadeIn} />
        </View>
      )}
      {showBox && (
        <View style={styles.button}>
          <Button title="Fade OUT" onPress={fadeOut} />
        </View>
      )}
    </View>
  );
};

export { Animation101Screen };
