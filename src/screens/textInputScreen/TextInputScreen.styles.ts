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
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  text: {
    ...globalStyles.text,
    marginTop: 20,
  },
});
