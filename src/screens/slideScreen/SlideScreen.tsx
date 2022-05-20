import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, View, Image, Text } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { styles } from './SlideScreen.styles';
import { HeaderTitle } from '../../components';
import { Slide } from '../../models/slide.model';
import { items } from '../../data/slideShow.data';

const SlideScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useRef(Dimensions.get('window')).current;

  const handleItemChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <HeaderTitle title="Slide Sreen" />
      </View>
      <Carousel
        data={items}
        sliderWidth={width}
        itemWidth={width}
        layout={'default'}
        onSnapToItem={index => handleItemChange(index)}
        renderItem={({ item }) => <_SlideItem item={item} />}
      />
      <Pagination dotsLength={items.length} activeDotIndex={activeIndex} dotStyle={styles.dot} inactiveDotStyle={styles.dotInactive} />
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
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export { SlideScreen };
