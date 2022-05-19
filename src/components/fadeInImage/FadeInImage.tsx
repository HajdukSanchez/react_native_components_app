import React, { useState } from 'react';
import { View, Animated, ActivityIndicator } from 'react-native';

import { styles } from './FadeInImage.styles';
import { useAnimation } from '../../hooks';

interface FadeInImageProps {
  uri: string;
}

const FadeInImage = ({ uri }: FadeInImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fadeIn, opacity } = useAnimation();

  const handleLoadEnd = () => {
    setIsLoading(false);
    fadeIn(500);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && <ActivityIndicator size={30} color={'grey'} />}
      <Animated.Image onLoadEnd={handleLoadEnd} source={{ uri }} style={{ width: '100%', height: 400, opacity }} />
    </View>
  );
};

export { FadeInImage };
