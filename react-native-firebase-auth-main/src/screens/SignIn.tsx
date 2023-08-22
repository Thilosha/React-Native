import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const auth = getAuth();

function SignInScreen<StackScreenProps>({ navigation }:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  async function signIn() {
    if (email === '' || password === '') {
      setError("Email and password are mandatory.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Thriftzy</Text>
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
        <Icon name="lock" color="gray" style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "eye-off" : "eye"}color="gray" style={styles.icon} />
        </Pressable>
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Pressable style={styles.signInButton} onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <Pressable style={styles.googleButton} onPress={() => { /* Handle Google Sign In Here */ }}>
        <Image source={require('../../assets/google_logo.png')} style={styles.googleLogo} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </Pressable>
      <Text style={styles.link} onPress={() => navigation.navigate("Sign Up")}>
        Don't have an account? Sign Up
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
    marginBottom: 30,
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
    // fontSize:10 ,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signInButton: {
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
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%', // Same width as input boxes
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleLogo: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'black', // Change the text color to black
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default SignInScreen;
