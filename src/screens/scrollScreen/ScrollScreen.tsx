import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { HeaderTitle } from '../../components';
import { styles } from './ScrollScreen.styles';

const ScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    let newArray: number[] = [];
    for (let index = 0; index < numbers.length; index++) {
      newArray[index] = numbers.length + 1 + index;
    }
    setNumbers([...numbers, ...newArray]);
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
      />
    </View>
  );
};

const _RenderItem = (item: number) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

export { ScrollScreen };
