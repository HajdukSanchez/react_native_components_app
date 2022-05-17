import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './MenuItem.styles';
import { MenuItemModel } from '../../models/MenuItem.model';

const MenuItem = ({ name, icon, screenName }: MenuItemModel) => {
  const { navigate } = useNavigation();

  const handleOnTap = () => {
    navigate(screenName as never);
  };

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={handleOnTap}>
      <View style={styles.container}>
        <View style={styles.information}>
          <Icon name={icon} size={30} color={'grey'} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View>
          <Icon name="chevron-forward-outline" size={30} color={'grey'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { MenuItem };
