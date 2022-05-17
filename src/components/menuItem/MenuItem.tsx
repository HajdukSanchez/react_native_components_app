import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './MenuItem.styles';
import { MenuItemModel } from '../../models/MenuItem.model';

const MenuItem = ({ name, component, icon }: MenuItemModel) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
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
