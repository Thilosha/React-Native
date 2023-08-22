import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './userStack';
import AuthStack from './authStack';
import HomeScreen from '../screens/Home'

export default function RootNavigation() {
  const { user } = useAuth();
  console.log("userlog",user?.email)

  return user?.email ? <UserStack /> : <AuthStack />;
}
