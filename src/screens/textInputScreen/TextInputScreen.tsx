import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './TextInputScreen.styles';
import { HeaderTitle } from '../../components';

const TextInputScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="Text Input" />
      <TextInput style={styles.textInput} />
    </View>
  );
};

export { TextInputScreen };
