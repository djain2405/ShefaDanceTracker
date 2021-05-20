import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import AppTextInput from './common/AppTextInput';

export default function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <SafeAreaView style={styles.container}>
        <AppTextInput icon={'email'}placeholder={'Enter Email here...'} value={email} onChangeText={(text: string) => {
           setEmail(text)
        }} />
        <AppTextInput placeholder={'Enter password here...'} value={password} onChangeText={(text: string) => {
            setPassword(text)
        }} secureText={true}/>
        <TouchableOpacity style={styles.loginButton} onPress={() => alert("logged in logic here?")}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#848393',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: 'orange',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 24,
        borderRadius: 8
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  });
  