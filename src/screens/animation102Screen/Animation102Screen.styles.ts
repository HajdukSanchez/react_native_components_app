import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    ...globalStyles.containerCenter,
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
