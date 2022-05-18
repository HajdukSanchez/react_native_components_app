import React from 'react';
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../../components';
import { styles } from './AlertScreen.styles';

const AlertScreen = () => {
  const handleShowAlert = () => {
    Alert.alert(
      'Title',
      'My Alert Message',
      [
        {
          text: 'Cancel',
          style: 'destructive',
        },
        {
          text: 'Accept',
          style: 'default',
        },
        {
          text: 'Third',
          style: 'default',
        },
      ],
      {
        cancelable: true, // Close the alert when user taps outside of it
      },
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={handleShowAlert} />
    </View>
  );
};

export { AlertScreen };
