import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  text: {
    ...globalStyles.text,
    textAlign: 'justify',
  },
  title: {
    ...globalStyles.text,
    fontSize: 25,
    fontWeight: 'bold',
  },
  dscription: {
    fontSize: 20,
    color: 'grey',
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
});
