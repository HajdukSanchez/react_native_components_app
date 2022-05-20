import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  textInput: {
    marginBottom: 15,
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    ...globalStyles.text,
    marginTop: 20,
  },
});
