import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen';
import LogTimeScreen from './src/LogTimeScreen';
import SignUpScreen from './src/SignUpScreen';

export default function App() {
  return (
    <LogTimeScreen/>
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
