import { StyleSheet } from 'react-native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  modalContainer: {
		...globalStyles.container,
		flex: 1,
  },
});
