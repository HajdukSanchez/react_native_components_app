import React from 'react';
import { View, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './HeaderTitle.styles';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: marginTop + 20, ...styles.header }}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export { HeaderTitle };
