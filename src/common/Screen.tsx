import React from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

export default function Screen({children, style}: {children: any, style?: any}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#848393',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });