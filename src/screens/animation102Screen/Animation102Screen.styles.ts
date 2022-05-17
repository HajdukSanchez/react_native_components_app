import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
