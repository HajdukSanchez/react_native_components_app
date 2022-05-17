import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
		marginBottom: 20
  },
  text: {
    ...globalStyles.text,
		marginRight: 20
  },
});
