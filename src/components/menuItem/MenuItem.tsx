import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './MenuItem.styles';
import { MenuItemModel } from '../../models/menuItem.model';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface MenuItemProps {
  menuItem: MenuItemModel;
}

const MenuItem = ({ menuItem: { icon, name, screenName } }: MenuItemProps) => {
  const { navigate } = useNavigation();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const handleOnTap = () => {
    navigate(screenName as never);
  };

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={handleOnTap}>
      <View style={styles.container}>
        <View style={styles.information}>
          <Icon name={icon} size={30} color={colors.primary} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View>
          <Icon name="chevron-forward-outline" size={30} color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { MenuItem };
