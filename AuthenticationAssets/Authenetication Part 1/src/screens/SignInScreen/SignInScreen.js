import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {firebase} from '..\Firebase\firebase';




const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [authError, setAuthError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const onSignInPressed = () => {
    // Implement your authentication logic here.
    // For example, you can check if the username and password match some stored credentials.
    // You can use a proper authentication method (e.g., JWT, OAuth, or Firebase Authentication).
    const storedUsername = 'your_stored_username';
    const storedPassword = 'your_stored_password';
  
    if (username === storedUsername && password === storedPassword) {
      setAuthenticated(true);
      setAuthError('');
      navigation.navigate('Home');
    } else {
      setAuthenticated(false);
      setAuthError('Invalid username or password.');
    }
  };
  

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
   
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />


<CustomInput
  placeholder="Username"
  value={username}
  setValue={setUsername}
/>
<CustomInput
  placeholder="Password"
  value={password}
  setValue={setPassword}
  secureTextEntry
/>
{authError !== '' && <Text style={styles.errorText}>{authError}</Text>}



        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignInScreen;
