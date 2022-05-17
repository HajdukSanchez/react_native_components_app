import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text>
        <Icon name="star-outline" size={50} color="red" />
      </Text>
    </View>
  );
};

export { HomeScreen };
