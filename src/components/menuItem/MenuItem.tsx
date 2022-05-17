import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './MenuItem.style';
import { MenuItemModel } from '../../models/MenuItem.model';

const MenuItem = ({ name, component, icon }: MenuItemModel) => {
  return (
    <View>
      <Text style={styles.text}>
        {name} - {icon}
      </Text>
    </View>
  );
};

export { MenuItem };
