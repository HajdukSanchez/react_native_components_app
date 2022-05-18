import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import { HeaderTitle } from '../../components';
import { styles } from './PullToRefreshScreen.style';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const hanldeRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={hanldeRefresh} />}>
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};

export { PullToRefreshScreen };
