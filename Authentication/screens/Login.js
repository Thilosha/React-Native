import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';


import { View } from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './../components/styles';

const { darkLight, brand, primary } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

 return(
    <StyledContainer>
        <StatusBar style="auto"/>
        <InnerContainer>
  <PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
  <PageTitle>Welcome </PageTitle>
  <SubTitle>Account Login </SubTitle>

  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      if (values.email === '' || values.password === '') {
        handleMessage('Please fill in all fields');
        setSubmitting(false);
      } else {
        handleLogin(values, setSubmitting);
      }
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
      <StyledFormArea>
        <MyTextInput
          label="Email Address"
          placeholder="andyj@gmail.com"
          placeholderTextColor={darkLight}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
          icon="mail"
        />
        <MyTextInput
         label="Password"
         placeholder="* * * * * * * *"
         placeholderTextColor={darkLight}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry={hidePassword}
         isPassword={true}
         icon="lock"
         hidePassword={hidePassword}
         setHidePassword={setHidePassword}
        />
        <MsgBox>...</MsgBox>
         <StyledButton onPress={handleSubmit}>
                    <ButtonText>Log in</ButtonText>
                  </StyledButton>
                  <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" size={25} color={primary} />
                    <ButtonText google={true}>Sign in with Google</ButtonText>
                  </StyledButton>

                  <ExtraView>
                  <ExtraText>Don't have an account already? </ExtraText>
                  <TextLink>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
      </StyledFormArea>
    )}
  </Formik>
</InnerContainer>


    </StyledContainer>
 );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                    {label}

            </StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
              <RightIcon
              onPress={() => {
                setHidePassword(!hidePassword);
              }}>
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
              </RightIcon>
            )}
        </View>)
}

export default Login;