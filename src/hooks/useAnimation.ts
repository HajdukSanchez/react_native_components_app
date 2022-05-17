import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration = 300) => {
    // The callback in the start is a fuction to we running when the animation is done.
    Animated.timing(opacity, { duration, toValue: 1, useNativeDriver: true }).start();
  };

  const fadeOut = (duration = 300) => {
    Animated.timing(opacity, { duration, toValue: 0, useNativeDriver: true }).start();
  };

  const movePosition = (initialPosition: number, finalPosition: number, duration: number, easing = Easing.bounce) => {
    position.setValue(initialPosition);
    Animated.timing(position, { duration, easing, toValue: finalPosition, useNativeDriver: true }).start();
  };

  return { opacity, position, fadeIn, fadeOut, movePosition };
};

export { useAnimation };
