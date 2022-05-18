import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';

import { HeaderTitle } from '../../components';
import { styles } from './PullToRefreshScreen.style';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  const hanldeRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Data refreshed using pull to refresh');
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={hanldeRefresh}
          colors={['orange', 'blue', 'red']}
        />
      }>
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
        <Text style={styles.text}>{data}</Text>
      </View>
    </ScrollView>
  );
};

export { PullToRefreshScreen };
