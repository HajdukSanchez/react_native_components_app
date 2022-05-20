import React, { useContext, useState } from 'react';
import { TextInput, View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './TextInputScreen.styles';
import { CustomSwitch, HeaderTitle } from '../../components';
import { useForm } from '../../hooks/useForm';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSusbscribed: false,
  });

  const handleInputChange = (value: string, field: keyof typeof form) => {
    onChange(value, field);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HeaderTitle title="Text Input" />
            <TextInput
              style={{ ...styles.textInput, color: colors.text, borderColor: colors.primary }}
              placeholder="Name"
              placeholderTextColor={'grey'}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => handleInputChange(value, 'name')}
            />
            <TextInput
              style={{ ...styles.textInput, color: colors.text, borderColor: colors.primary }}
              placeholder="Email"
              placeholderTextColor={'grey'}
              autoCorrect={false}
              onChangeText={value => handleInputChange(value, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={{ ...styles.textInput, color: colors.text, borderColor: colors.primary }}
              placeholder="Phone "
              placeholderTextColor={'grey'}
              onChangeText={value => handleInputChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <CustomSwitch isOn={form.isSusbscribed} text="Suscribe" onChange={value => onChange(value, 'isSusbscribed')} />
            <Text style={{ ...styles.text, color: colors.text }}>{JSON.stringify(form, null, 4)}</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { TextInputScreen };
