import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  button: {
    justifyContent: 'center',
    marginHorizontal: 50,
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
