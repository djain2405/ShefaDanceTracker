import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';

export default function App() {
  return (
    <SignUpScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
