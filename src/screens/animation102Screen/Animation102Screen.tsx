import React, { useRef } from 'react';
import { Animated, PanResponder, View } from 'react-native';

import { styles } from './Animation102Screen.styles';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: parseInt(pan.x.addListener(value => value.value)),
          y: parseInt(pan.y.addListener(value => value.value)),
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: true },
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: pan.getTranslateTransform(),
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export { Animation102Screen };
