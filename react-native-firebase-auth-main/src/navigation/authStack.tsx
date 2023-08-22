import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn';
import SignOutScreen from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  let isVisible
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {isVisible = true ? <Stack.Screen name="Sign In" component={SignInScreen} />: null}
        <Stack.Screen name="Sign Up" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
