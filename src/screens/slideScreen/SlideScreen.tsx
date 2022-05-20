import React, { useRef } from 'react';
import { Dimensions, SafeAreaView, View, Image, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { styles } from './SlideScreen.styles';
import { HeaderTitle } from '../../components';
import { Slide } from '../../models/slide.model';
import { items } from '../../data/slideShow.data';

const SlideScreen = () => {
  const { width } = useRef(Dimensions.get('window')).current;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Slide Sreen" />
      <Carousel
        data={items}
        renderItem={({ item }) => <_SlideItem item={item} />}
        sliderWidth={width - styles.container.marginHorizontal * 2}
        itemWidth={width - styles.container.marginHorizontal * 2}
        layout={'default'}
      />
    </SafeAreaView>
  );
};

interface SlideItemProps {
  item: Slide;
}

const _SlideItem = ({ item }: SlideItemProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dscription}>{item.description}</Text>
    </View>
  );
};

export { SlideScreen };
