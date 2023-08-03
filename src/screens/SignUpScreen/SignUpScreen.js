import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';
// import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [usernameExistsWarning, setUsernameExistsWarning] = useState('');
  const [passwordMismatchWarning, setPasswordMismatchWarning] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    // Check if the password and repeat password match
    // if (password !== passwordRepeat) {
    //   setPasswordMismatchWarning('Passwords do not match.');
    //   return;
    // }

    // // Implement your username existence check logic here.
    // // For example, you can check if the username already exists in your database.
    // // You should replace this with your actual check.
    // const isUsernameExists = false; // Replace with your logic to check username existence

    // if (isUsernameExists) {
    //   setUsernameExistsWarning('Username already exists.');
    //   return;
    // }

    // // If everything is okay, proceed with account creation logic
    // // For example, you can use Firebase Authentication to create a new user account.
    // // Replace this with your actual account creation logic.

    // // Clear the warning messages if there were any previous warnings.
    // setUsernameExistsWarning('');
    // setPasswordMismatchWarning('');

    // // Navigate to the next screen or perform any other actions upon successful account creation.
    // auth()
    // .createUserWithEmailAndPassword(email, password)
    // .then(() => {
    //   navigation.navigate('ConfirmEmail');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
  
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
  
    //   console.error(error);
    // });
    
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        {usernameExistsWarning !== '' && (
          <Text style={styles.warning}>{usernameExistsWarning}</Text>
        )}

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        {passwordMismatchWarning !== '' && (
          <Text style={styles.warning}>{passwordMismatchWarning}</Text>
        )}

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  warning: {
    color: 'red',
    marginVertical: 5,
  },
});

export default SignUpScreen;
