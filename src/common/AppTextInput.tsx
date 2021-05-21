import React from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppTextInput({icon, placeholder = "", value, onChangeText, textStyle, secureText} : {icon?: any, placeholder: string, value: string, onChangeText: (text: string) => void, textStyle?: any, secureText?: boolean}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={'gray'} style={{marginRight: 8}}/>}
            <TextInput style={[styles.textInput, textStyle]} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureText} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'yellow',
      borderRadius: 24,
      width: '80%',
      padding: 16,
      marginVertical: 8
    },
    textInput: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
  });
  