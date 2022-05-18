import React from 'react';
import { View, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './HeaderTitle.styles';

interface HeaderTitleProps {
  title: string;
  withTop?: boolean;
}

const HeaderTitle = ({ title, withTop = true }: HeaderTitleProps) => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: withTop ? marginTop + 20 : 0, ...styles.header }}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export { HeaderTitle };
