import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './HomeScreen.styles';
import { menuItems } from '../../data/menuItems.data';
import { HeaderTitle, MenuItem } from '../../components';
import { MenuItemModel } from '../../models/menuItem.model';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem menuItem={item} />}
        keyExtractor={(item: MenuItemModel) => `${item.name}__${item.icon}`}
        ListHeaderComponent={() => <HeaderTitle title="Menu options" />}
        ItemSeparatorComponent={() => <_ItemSeparator />}
      />
    </View>
  );
};

const _ItemSeparator = () => <View style={styles.itemSeparator} />;

export { HomeScreen };
