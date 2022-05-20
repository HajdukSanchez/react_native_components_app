import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './HeaderTitle.styles';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

interface HeaderTitleProps {
  title: string;
  withTop?: boolean;
}

const HeaderTitle = ({ title, withTop = true }: HeaderTitleProps) => {
  const { top: marginTop } = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={{ marginTop: withTop ? marginTop + 20 : 0, ...styles.header }}>
      <Text style={{ ...styles.headerText, color: colors.text }}>{title}</Text>
    </View>
  );
};

export { HeaderTitle };
