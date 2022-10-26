import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
    IconBackPanahItem,
    IconBack,
    IconKaliGray,
    IconArrowKanan,
    BgVoucher,
    NotFoundVoucher
} from '../../assets'
import styles from './Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Voucher = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={BgVoucher} style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => {
                        console.log(1)
                        navigation.navigate('Home')
                    }}>
                        <IconBack style={styles.iconpanah}></IconBack>
                    </TouchableOpacity>
                    <Text style={styles.judul}>Voucher</Text>
                </View>

                <View style={styles.searchVoucher}>
                    <View style={styles.kotakVoucher}></View>
                    <IconKaliGray style={styles.iconKaliGray}></IconKaliGray>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.teksVoucher}>Punya kode promo? Masukkan di sini, ya..</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <IconArrowKanan style={styles.iconArrowKanan}></IconArrowKanan>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={styles.kotak}>
                        <Image source={NotFoundVoucher} style={styles.notFoundPeta} />
                        <Text style={styles.judulSatu}>Kamu belum punya voucher</Text>
                        <Text style={styles.judulDua}>Nanti kalau udah ada, kamu bisa cek di sini. </Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Voucher;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

