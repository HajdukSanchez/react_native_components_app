import React from 'react';
import { View, FlatList } from 'react-native';

import { MenuItem } from '../../components';
import { MenuItemModel } from '../../models/MenuItem.model';

const menuItems: MenuItemModel[] = [{ name: 'Animation 101', icon: 'cube-outline', component: null }];

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item: MenuItemModel) => `${item.name}__${item.icon}`}
      />
    </View>
  );
};

export { HomeScreen };
