import { StyleSheet } from 'react-native';

import { DefaultTheme } from '@react-navigation/native';

import { globalStyles } from '../../styles/styles';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginTop: 60,
  },
  text: {
    ...globalStyles.text,
  },
  sectionItem: {
    marginVertical: 10,
    marginLeft: 20,
    borderLeftWidth: 4,
  },
  sectionItemText: {
    ...globalStyles.text,
    fontSize: 20,
    paddingLeft: 10,
  },
  section: {
    borderRadius: 10,
    backgroundColor: DefaultTheme.colors.background,
  },
  sectionHeaderText: {
    ...globalStyles.text,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 27,
    fontWeight: 'bold',
  },
  sectionFooterText: {
    ...globalStyles.text,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'grey',
  },
});
