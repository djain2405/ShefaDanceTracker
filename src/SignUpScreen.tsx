import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppPicker from './common/AppPicker';
import AppTextInput from './common/AppTextInput';
import AppScreen from './common/Screen';

const classArray = [
    {label: 'Class One', value: 1},
    {label: 'Class Two', value: 2},
    {label: 'Class Three', value: 3},
]
export default function SignUpScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pickedClass, setPickedClass] = useState()
    
    return (
      <AppScreen>
        <AppTextInput icon={'face-profile'}placeholder={'Enter full name here...'} value={name} onChangeText={(text: string) => {
           setName(text)
        }} />
        <AppTextInput icon={'email'}placeholder={'Enter Email here...'} value={email} onChangeText={(text: string) => {
           setEmail(text)
        }} />
        <AppTextInput placeholder={'Enter password here...'} value={password} onChangeText={(text: string) => {
            setPassword(text)
        }} secureText={true}/>
        <AppPicker items={classArray} icon={'apps'} placeholder={'Pick your class'} selectedItem={pickedClass} onSelectItem={item => setPickedClass(item)}/>
        <TouchableOpacity style={styles.signUpButton} onPress={() => alert("Sign up logic here?")}>
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </AppScreen>
    );
  }

  const styles = StyleSheet.create({
    signUpButton: {
        backgroundColor: 'orange',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 24,
        borderRadius: 8
    },
    signUpButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  });
  