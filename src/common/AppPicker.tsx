import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, Platform, TouchableWithoutFeedback, Modal, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppPicker({icon, placeholder = "", items, selectedItem, onSelectItem} : {icon?: any, placeholder: string, items: any[], selectedItem: any, onSelectItem: (item: any) => void}) {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={'gray'} style={{marginRight: 8}}/>}
                <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
                <MaterialCommunityIcons name={'chevron-down'} size={20} color={'gray'} style={{marginLeft: 8}}/>
            </View>
            </TouchableWithoutFeedback>
            <Modal style={{backgroundColor: 'yellow'}} visible={modalVisible} animationType={'slide'}>
                <SafeAreaView>
                    <Button onPress={() => setModalVisible(false)} title={'close'}/>
                    <FlatList 
                        data={items} 
                        keyExtractor={item => item.value.toString()} 
                        renderItem={({item}) => <PickerItem label={item.label} onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item)
                        }}/>
                    }
                    />
                </SafeAreaView>
            </Modal>
        </>
    )
}

function PickerItem({label, onPress}: {label: string, onPress:() => void}) {
    return (
        <TouchableOpacity style={styles.pickerItemContainer} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
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
    pickerItemContainer: {
        padding: 16
    },
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        flex: 1
    }
  });
  