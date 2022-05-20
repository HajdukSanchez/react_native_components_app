import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    marginHorizontal: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5856D6',
  },
	dotInactive: {
		backgroundColor: '#BDBDBD',
	},
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
		marginBottom: 10,
    fontSize: 30,
    color: '#5856D6',
    fontWeight: 'bold',
  },
  description: {
    ...globalStyles.text,
    fontSize: 20,
    textAlign: 'justify',
  },
});
