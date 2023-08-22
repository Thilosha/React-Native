import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const auth = getAuth();

function SignUpScreen<StackScreenProps>({ navigation }:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  async function signUp() {
    if (email === '' || password === '' || confirmPassword === '') {
      setError("All fields are mandatory.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Sign In');
    } catch (error:any) {
      setError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Thriftzyin</Text>
      <Text style={styles.subHeading}>Create an account</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" color="gray" style={styles.icon} />
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock"  color="gray" style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "eye-off" : "eye"} color="gray" style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" color="gray" style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          style={styles.input}
          onChangeText={setConfirmPassword}
          secureTextEntry={!confirmPasswordVisible}
        />
        <Pressable onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Icon name={confirmPasswordVisible ? "eye-off" : "eye"}  color="gray" style={styles.icon} />
        </Pressable>
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Pressable style={styles.signUpButton} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.link} onPress={() => navigation.navigate("Sign In")}>
        Already have an account? Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  welcomeText: {
   
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
   
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,

  },
  input: {
    flex: 1,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#57c5c6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%', // Same width as input boxes
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default SignUpScreen;
