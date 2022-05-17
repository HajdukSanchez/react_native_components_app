import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './HomeScreen.styles';
import { MenuItem } from '../../components';
import { MenuItemModel } from '../../models/MenuItem.model';

const menuItems: MenuItemModel[] = [
  { name: 'Animation 101', icon: 'cube-outline', component: null },
  { name: 'Animation 102', icon: 'albums-outline', component: null },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item: MenuItemModel) => `${item.name}__${item.icon}`}
        ListHeaderComponent={() => <_HeaderList />}
        ItemSeparatorComponent={() => <_ItemSeparator />}
      />
    </View>
  );
};

const _HeaderList = () => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: marginTop + 20, ...styles.header }}>
      <Text style={styles.headerText}>Menu options</Text>
    </View>
  );
};

const _ItemSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export { HomeScreen };
