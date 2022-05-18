import React from 'react';
import { View, Button, Alert } from 'react-native';

import prompt from 'react-native-prompt-android';

import { styles } from './AlertScreen.styles';
import { HeaderTitle } from '../../components';

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

  const handleShowPrompt = () => {
    prompt('Enter password', 'Enter your password to claim your $1.5B in lottery winnings', [{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }], {
      type: 'secure-text',
      cancelable: false,
      defaultValue: 'test',
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={handleShowAlert} />
      <View style={{ height: 20 }} />
      <Button title="Show prompt" onPress={handleShowPrompt} />
    </View>
  );
};

export { AlertScreen };
