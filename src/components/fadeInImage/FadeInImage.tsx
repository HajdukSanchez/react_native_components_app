import React, { useState } from 'react';
import { View, Animated, ActivityIndicator, StyleProp, ImageStyle, ViewStyle, ColorValue } from 'react-native';

import { styles } from './FadeInImage.styles';
import { useAnimation } from '../../hooks';

interface FadeInImageProps {
  uri: string;
  loadingColor?: ColorValue;
  viewStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, imageStyle = {}, viewStyle = {}, loadingColor }: FadeInImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fadeIn, opacity } = useAnimation();

  console.log(imageStyle);

  const handleLoadEnd = () => {
    setIsLoading(false);
    fadeIn(500);
  };

  return (
    <View style={viewStyle ? viewStyle : styles.imageContainer}>
      {isLoading && <ActivityIndicator size={30} color={loadingColor ? loadingColor : 'grey'} />}
      <Animated.Image onLoadEnd={handleLoadEnd} source={{ uri }} style={[imageStyle ? (imageStyle as any) : styles.image, opacity]} />
    </View>
  );
};

export { FadeInImage };
