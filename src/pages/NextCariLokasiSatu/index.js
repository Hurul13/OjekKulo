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
    IconMapBiru,
    IconEdit,
    IconPaper
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const NextCariLokasiSatu = ({ navigation }) => {
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
                    <Text style={styles.teksPertama}>Cek lagi titik jemput di peta</Text>
                    <Text style={styles.teksKedua}>Pilih lokasi strategis terdekat.</Text>
                    <TouchableOpacity>
                        <IconEdit style={styles.iconEdit}></IconEdit>
                    </TouchableOpacity>
                    <Text style={styles.batas}>________________________________________________________________</Text>
                </View>
                <View style={styles.kotakFavorit}></View>
                <View style={styles.batasJudul}>
                    <TouchableOpacity onPress={() => {
                        console.log(1)
                        navigation.navigate('EditLokasi')
                    }}>
                        <IconMapBiru style={styles.iconMapBiru}></IconMapBiru>
                        <Text style={styles.teksJudulKota}>Jl. Park Regency Blok B No.9</Text>
                        <Text style={styles.teksAlamat}>Jl. Park Regency Blok B No.9, RT.000/RW.00, Keputih,</Text>
                        <Text style={styles.teksAlamat}>Kec. Sukolilo, Kota SBY, Jawa Timur 60111, Indonesia</Text>
                        <IconPaper style={styles.iconPaper}></IconPaper>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity >
                        <Text style={styles.teksKetiga}>Perumahan Sukolilo Park Regency</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                        console.log(1)
                        navigation.navigate('NextCariLokasiDua')
                    }}>
                    <View style={styles.bottom}>
                        <View style={styles.kotakBottom}></View>
                        <Text style={styles.tekBottom}>Lanjut</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default NextCariLokasiSatu

const styles = StyleSheet.create({
    iconBackBulat: {
        marginTop: 410,
        marginLeft: 28
    },
    kotakLokasi: {
        backgroundColor: '#ffff',
        marginTop: 12,
        //marginLeft: 28,
        height: 290,
        width: 357,
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
    teksKedua: {
        color: 'black',
        fontSize: 12,
        marginTop: 1,
        marginLeft: 28
    },
    iconEdit: {
        marginLeft: 310,
        marginTop: -26
    },
    batas: {
        marginTop: 5,
        marginLeft: 2,
        color: '#D9D9D9'
    },
    batasJudul: {
        marginTop: -69,
        marginLeft: 12
    },
    kotakFavorit: {
        backgroundColor: '#ECEFF5',
        marginTop: 13,
        marginLeft: 28,
        height: 65,
        width: 310,
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#D9D9D9',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //elevation: 7,
        flexDirection: 'row',
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
        fontSize: 10,
    },
    iconPaper: {
        marginTop: -30,
        marginLeft: 297
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
    teksKetiga: {
        color: '#000000',
        marginLeft: 78,
        marginTop: 38,
        fontSize: 14,
        fontWeight: 'bold'
    },
    iconCancel: {
        marginLeft: 310,
        marginTop: -13
    },
    bottom: {
        marginTop: -5
    },
    kotakBottom: {
        backgroundColor: '#598FF9',
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