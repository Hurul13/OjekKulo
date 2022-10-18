import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
    IconBackPanahItem
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Voucher = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    console.log(1)
                    navigation.navigate('Home')
                }}>
                    <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
                </TouchableOpacity>
                <Text style={styles.judul}>Voucher</Text>
            </View>

         </View>
    )
}

export default Voucher;

const styles = StyleSheet.create({
    judul: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginTop: -16,
        fontWeight: 'bold'
    },
    iconpanah: {
        color: 'black',
        marginBottom: 0,
        marginTop: 30,
        marginLeft: 28,
    },
});