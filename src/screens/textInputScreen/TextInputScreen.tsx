import React, { useState } from 'react';
import { TextInput, View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './TextInputScreen.styles';
import { HeaderTitle } from '../../components';

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (value: string, field: keyof typeof form) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HeaderTitle title="Text Input" />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor={'grey'}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => handleInputChange(value, 'name')}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={'grey'}
              autoCorrect={false}
              onChangeText={value => handleInputChange(value, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Phone "
              placeholderTextColor={'grey'}
              onChangeText={value => handleInputChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <Text style={styles.text}>{JSON.stringify(form, null, 4)}</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { TextInputScreen };
