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


const AddDataFavorit = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                console.log(1)
                navigation.navigate('CariLokasi')
            }}>
                <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
            </TouchableOpacity>
            <View style={styles.kotakLokasi}>
                <View>
                    <Text style={styles.teksPertama}>Tambah Alamat</Text>
                    <TouchableOpacity>
                        <IconMapSearch style={styles.iconMapSearch}></IconMapSearch>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                    console.log(1)
                    navigation.navigate('EditLokasi')
                }}>
                    <View>
                        <IconMapBiru style={styles.iconMapBiru}></IconMapBiru>
                        <Text style={styles.teksJudulKota}>Jl. Park Regency Blok B No.9</Text>
                        <Text style={styles.teksAlamat}>Jl. Park Regency Blok B No.9, RT.000/RW.00, Keputih,</Text>
                        <Text style={styles.teksAlamat}>Kec. Sukolilo, Kota SBY, Jawa Timur 60111, Indonesia</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <IconFavoritBlack style={styles.iconFavoritBlack}></IconFavoritBlack>
                    <Text style={styles.teks}>Nama Alamat</Text>
                    <TouchableOpacity onPress={() => {
                        console.log(1)
                        navigation.navigate('AddDataFavoritNote')
                    }}>
                        <Text style={styles.teksDua}>Cth: Sekolah, Rumah nenek</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View>
                        <View style={styles.search}></View>
                        <Text style={styles.tekBottom}>Tambah Alamat</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default AddDataFavorit

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
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 28
    },
    iconMapSearch: {
        marginLeft: 310,
        marginTop: -14
    },
    iconMapBiru: {
        marginLeft: 28,
        marginTop: 25
    },
    teksJudulKota: {
        color: 'black',
        marginLeft: 65,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 14
    },
    teksAlamat: {
        color: 'black',
        marginLeft: 65,
        marginTop: 1,
        fontSize: 11,
    },
    iconFavoritBlack: {
        marginLeft: 28,
        marginTop: 25
    },
    teks: {
        color: 'black',
        marginLeft: 65,
        marginTop: -25,
        fontSize: 11,
    },
    teksDua: {
        color: '#929292',
        marginLeft: 65,
        marginTop: 1,
        fontSize: 14,
    },
    search: {
        backgroundColor: '#929292',
        marginTop: 25,
        marginLeft: 28,
        height: 40,
        width: 300,
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //elevation: 7,
        flexDirection: 'row',
    },
    tekBottom: {
        color: '#ffff',
        marginTop: -30,
        textAlign: 'center',
        fontSize: 16
    }
})