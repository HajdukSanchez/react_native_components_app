import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { FadeInImage, HeaderTitle } from '../../components';
import { styles } from './ScrollScreen.styles';

const ScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    let newArray: number[] = [];
    for (let index = 0; index < numbers.length; index++) {
      newArray[index] = numbers.length + 1 + index;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => _RenderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<_LoadingFooter />}
      />
    </View>
  );
};

const _RenderItem = (item: number) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${item}/500/400`}
      viewStyle={{ width: '100%', height: 400, marginBottom: 20 }}
      imageStyle={{ width: '100%', height: '100%', borderRadius: 10 }}
      loadingColor={'black'}
    />
  );
};

const _LoadingFooter = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={20} color={'grey'} />
    </View>
  );
};

export { ScrollScreen };
