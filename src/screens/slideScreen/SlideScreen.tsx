import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, View, Image, Text, TouchableOpacity, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useAnimation } from '../../hooks';
import { styles } from './SlideScreen.styles';
import { HeaderTitle } from '../../components';
import { Slide } from '../../models/slide.model';
import { items } from '../../data/slideShow.data';
import { ScreenNames } from '../../routes/routes';
import { StackScreenProps } from '@react-navigation/stack';

interface SlideScreenProps extends StackScreenProps<any, any> {}

const SlideScreen = ({ navigation: { navigate } }: SlideScreenProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { opacity, fadeIn } = useAnimation();
  const { width } = useRef(Dimensions.get('window')).current;
  const showButton = useRef<boolean>(false);

  const handleItemChange = (index: number) => {
    setActiveIndex(index);
    if (index === items.length - 1) {
      showButton.current = true;
      fadeIn();
    }
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
      <Animated.View style={{ opacity }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            if (showButton.current) navigate(ScreenNames.Home);
          }}>
          <Text style={styles.buttonText}>Next</Text>
          <Icon name="chevron-forward-outline" color={'white'} size={30} />
        </TouchableOpacity>
      </Animated.View>
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
