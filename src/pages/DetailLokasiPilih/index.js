import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import {
    IconBackBulat,
    IconFavoritBlack,
    IconMapSearch,
    IconMapBiru
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const DetailLokasiPilih = ({ navigation }) => {
    return (
        <View>
            <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
            <View style={styles.kotakLokasi}>
                <View>
                    <Text style={styles.teksPertama}>Tambah Alamat</Text>
                    <IconMapSearch style={styles.iconMapSearch}></IconMapSearch>
                </View>
                <View>
                    <IconMapBiru style={styles.iconMapBiru}></IconMapBiru>
                    <Text style={styles.teksJudulKota}>Jl. Park Regency Blok B No.9</Text>
                    <Text style={styles.teksAlamatSatu}>Jl. Park Regency Blok B No.9, RT.000/RW.00, Keputih,</Text>
                </View>

            </View>

        </View >
    )
}

export default DetailLokasiPilih

const styles = StyleSheet.create({
    iconBackBulat: {
        marginTop: 440,
        marginLeft: 28
    },
    kotakLokasi: {
        backgroundColor: '#ffff',
        marginTop: 10,
        //marginLeft: 28,
        height: 260,
        width: 356,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        // flexDirection: 'row',
    },
    teksPertama: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'medium',
        marginTop: 20,
        marginLeft: 28
    },
    iconMapSearch: {
        marginLeft: 310,
        marginTop: -14
    },
    iconMapBiru: {
        marginLeft: 28,
        marginTop: 40
    },
    teksJudulKota:{
        color: 'black',
        marginLeft: 65,
        marginTop: -30
    },
    teksAlamatSatu: {
        color: 'black',
        marginLeft: 65,
        marginTop: 1,
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: 'light'
    }
})