import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppTextInput from './common/AppTextInput';
import AppScreen from './common/Screen';

export default function LogTimeScreen() {

    const [mins, setMins] = useState(0)
    const [secs, setSeconds] = useState(0)
    const [playing, setPlaying] = useState(false)
    
    return (
      <AppScreen>
        <Text style={styles.titleText}>Let's go... start Practicing!!</Text>
        <View style={styles.timer}>
            <Text style={styles.timerText}>{(mins < 10 ? '0'+mins : mins) + ' : '+(secs < 10 ? '0'+secs : secs)}</Text>
        </View>
        <TouchableOpacity style={styles.startButton} onPress={() => {
            setPlaying(!playing)
        }}>
            <Text style={styles.saveButtonText}>{playing ? 'PAUSE' : 'START'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => alert("Continue to Save screen")}>
            <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </AppScreen>
    );
  }

  const styles = StyleSheet.create({
    titleText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    timer: {
        height: 164,
        width: 164,
        borderRadius: 82,
        backgroundColor: 'yellow',
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timerText: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    startButton: {
        backgroundColor: 'orange',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 24,
        borderRadius: 8
    },
    saveButton: {
        backgroundColor: 'orange',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 24,
        borderRadius: 8
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  });
  