import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  item: {
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  imageContainer: {
    marginBottom: 20,
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
});
