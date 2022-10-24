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
    IconLokasiBiru,
    IconMapOren,
    IconPlus,
    IconTime,
    IconBackBulatKanan,
    IconMoreBulatKotak,
    IconLine,
    IconUang,
    IconPanahKanan,
    IconMobil,
    IconMotor,
    IconUser
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const NextCariLokasiDua = ({ navigation }) => {
    return (
        <View>
            <View>
                <View style={styles.kotakAlamat}></View>
                <IconLokasiBiru style={styles.lokasiBiru}></IconLokasiBiru>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.tekLokasibiru}>Lokasi kamu sekarang</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.garisLokasi}>__________________________</Text>
                <IconMapOren style={styles.lokasiOren}></IconMapOren>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.tekLokasiOren}>Cari lokasi tujuan</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.kotakPlus}>
                            <View style={styles.mapPeta}></View>
                            <IconPlus style={styles.iconPlus}></IconPlus>
                            <Text style={styles.tekPlus}>Tambah tujuan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={() => {
                    console.log(1)
                    navigation.navigate('NextCariLokasiSatu')
                }}>
                    <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
                </TouchableOpacity>
            </View>


            <View style={styles.kotakLokasi}>
                <IconLine style={styles.iconLine}></IconLine>
                <Text style={styles.teksPertama}>Mau naik apa?</Text>

                <View>
                    <View style={styles.kotakFavorit}></View>
                    <View style={styles.batasSatu}>
                        <TouchableOpacity onPress={() => {
                            console.log(1)
                            navigation.navigate('EditLokasi')
                        }}>
                            <IconMotor style={styles.iconMotor}></IconMotor>
                            <Text style={styles.teksJudul}>GoRide</Text>
                            <Text style={styles.teksSatu}>9-11 menit</Text>
                            <Text style={styles.teksDua}>.</Text>
                            <IconUser style={styles.iconUser}></IconUser>
                            <Text style={styles.teksTiga}>1</Text>
                            <Text style={styles.teksEmpat}>Rp 19.000</Text>
                            <Text style={styles.garisSatu}>__________________________________________________</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.batasDua}>
                        <TouchableOpacity onPress={() => {
                            console.log(1)
                            navigation.navigate('EditLokasi')
                        }}>
                            <IconMobil style={styles.iconMobil}></IconMobil>
                            <Text style={styles.teksMobilJudul}>GoCar</Text>
                            <Text style={styles.teksMobilSatu}>3-7 menit</Text>
                            <Text style={styles.teksMobilDua}>.</Text>
                            <IconUser style={styles.iconUser}></IconUser>
                            <Text style={styles.teksMobilTiga}>4</Text>
                            <Text style={styles.teksMobilEmpat}>Rp 40.500</Text>
                            <Text style={styles.garisSatu}>__________________________________________________</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View></View>
                </View>

                <View style={styles.kotakBgBottom}>
                    <View>

                        <View style={styles.bottom}>
                            <TouchableOpacity>
                                <View style={styles.kotakBottom}></View>
                                <Text style={styles.tekBottomSatu}>Pesan GoRide</Text>
                                <Text style={styles.tekBottomDua}>Rp 17.000</Text>
                                <IconBackBulatKanan style={styles.iconBackBulatKanan}></IconBackBulatKanan>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <IconTime style={styles.iconTime}></IconTime>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <IconMoreBulatKotak style={styles.iconMoreBulatKotak}></IconMoreBulatKotak>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <View style={styles.kotakIconVoucher}>
                                    <Text style={styles.teksVoucher}>Voucher</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity>
                                <IconUang style={styles.iconUang}></IconUang>
                                <Text style={styles.teksKetiga}>Tunai</Text>
                                <IconPanahKanan style={styles.iconPanahKanan}></IconPanahKanan>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        </View >
    )
}

export default NextCariLokasiDua

const styles = StyleSheet.create({
    kotakAlamat: {
        backgroundColor: '#ffff',
        marginTop: 33,
        marginLeft: 28,
        height: 68,
        width: 310,
        borderRadius: 10,
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
    lokasiBiru: {
        marginTop: -58,
        marginLeft: 38
    },
    tekLokasibiru: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 70
    },
    garisLokasi: {
        marginTop: -7,
        marginLeft: 70,
        color: '#D9D9D9',
    },
    lokasiOren: {
        marginTop: 1,
        marginLeft: 38
    },
    tekLokasiOren: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 70
    },
    mapPeta: {
        //backgroundColor: '#E7E7E7',
        marginTop: 60,
        marginLeft: 28,
        height: 31,
        width: 110,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#D9D9D9',
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
    iconPlus: {
        marginTop: -22,
        marginLeft: 34
    },
    tekPlus: {
        color: '#929292',
        marginTop: -15,
        marginLeft: 53,
        fontSize: 13
    },
    kotakPlus: {
        marginTop: -100,
        marginLeft: 190
    },
    iconBackBulat: {
        marginTop: 255,
        marginLeft: 28
    },
    kotakLokasi: {
        backgroundColor: '#ffff',
        marginTop: 12,
        //marginLeft: 28,
        height: 350,
        width: 358,
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
    iconLine: {
        marginTop: 10,
        marginLeft: 160
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
    batasSatu: {
        marginTop: -69,
        marginLeft: 12
    },
    kotakFavorit: {
        backgroundColor: '#ECEFF5',
        marginTop: 13,
        //marginLeft: 28,
        height: 65,
        width: 362,
        //borderRadius: 0,
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
    iconMotor: {
        marginLeft: 22,
        marginTop: 20
    },
    teksJudul: {
        color: 'black',
        marginLeft: 69,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 15
    },
    teksSatu: {
        color: 'black',
        marginLeft: 69,
        marginTop: 1,
        fontSize: 10,
    },
    teksDua: {
        color: 'black',
        marginLeft: 115,
        marginTop: -27,
        fontSize: 26,
    },
    iconUser: {
        marginLeft: 125,
        marginTop: -13,
    },
    teksTiga: {
        color: 'black',
        marginLeft: 137,
        marginTop: -11,
        fontSize: 10,
    },
    teksEmpat: {
        color: 'black',
        marginLeft: 260,
        marginTop: -25,
        fontSize: 15,
        fontWeight: 'bold',
    },
    garisSatu: {
        marginTop: 9,
        marginLeft: 68,
        //height: 220,
        //width: 200,
        color: '#D9D9D9',
    },
    batasDua: {
        marginTop: 7,
        marginLeft: 12
    },
    iconMobil: {
        marginLeft: 22,
        marginTop: 20
    },
    teksMobilJudul: {
        color: 'black',
        marginLeft: 69,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 15
    },
    teksMobilSatu: {
        color: 'black',
        marginLeft: 69,
        marginTop: 1,
        fontSize: 10,
    },
    teksMobilDua: {
        color: 'black',
        marginLeft: 115,
        marginTop: -27,
        fontSize: 26,
    },
    iconUser: {
        marginLeft: 125,
        marginTop: -13,
    },
    teksMobilTiga: {
        color: 'black',
        marginLeft: 137,
        marginTop: -11,
        fontSize: 10,
    },
    teksMobilEmpat: {
        color: 'black',
        marginLeft: 255,
        marginTop: -25,
        fontSize: 15,
        fontWeight: 'bold',
    },
    kotakBgBottom: {
        backgroundColor: '#ffff',
        marginTop: 10,
        //marginLeft: 28,
        height: 350,
        width: 358,
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
    bottom: {
        marginTop: 40
    },
    kotakBottom: {
        backgroundColor: '#598FF9',
        marginTop: 25,
        marginLeft: 80,
        height: 43,
        width: 250,
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
    tekBottomSatu: {
        color: '#ffff',
        marginTop: -33,
        marginLeft: 100,
        fontSize: 16,
        fontWeight: 'bold',

    },
    tekBottomDua: {
        color: '#ffff',
        marginTop: -18,
        marginLeft: 220,
        fontSize: 16
    },
    iconTime: {
        marginTop: -30,
        marginLeft: 28
    },
    iconBackBulatKanan: {
        marginTop: -19,
        marginLeft: 291
    },
    iconMoreBulatKotak: {
        marginTop: -85,
        marginLeft: 300
    },
    kotakIconVoucher: {
        //backgroundColor: '#E7E7E7',
        marginTop: -85,
        marginLeft: 227,
        height: 25,
        width: 63,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //elevation: 9,
    },
    teksVoucher: {
        color: '#929292',
        marginTop: 1,
        marginLeft: 5,
        fontSize: 16
    },
    iconUang: {
        marginLeft: 28,
        marginTop: -77,
    },
    teksKetiga: {
        marginLeft: 52,
        marginTop: -19,
        color: 'black',
        fontSize: 14
    },
    iconPanahKanan: {
        marginTop: -13,
        marginLeft: 90
    },
})