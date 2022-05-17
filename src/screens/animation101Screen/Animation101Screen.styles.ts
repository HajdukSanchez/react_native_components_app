import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#5856D6',
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
  },
});
