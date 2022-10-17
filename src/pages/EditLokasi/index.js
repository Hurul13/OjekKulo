import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
    IconBackPanahItem,
    IconFavorit,
    IconMapBiru,
    IconMapOren,
    IconMapPeta,
    IconSearch,
    IconLokasiOren
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const EditLokasi = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    console.log(1)
                    navigation.navigate('Home')
                }}>
                    <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
                </TouchableOpacity>
                <Text style={styles.judul}>Edit Alamat</Text>
            </View>

            <View>
                <View style={styles.kotakLokasi}></View>
                <IconMapOren style={styles.lokasiOren}></IconMapOren>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.tekLokasiOren}>Cari lokasi tujuan</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <IconSearch style={styles.iconSearch}></IconSearch>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.keduaKotak}>
                <TouchableOpacity>
                    <View>
                        <View style={styles.mapPeta}></View>
                        <IconMapPeta style={styles.iconMapPeta}></IconMapPeta>
                        <Text style={styles.tekMapPeta}>Pilih lewat peta</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity>
                        <View style={styles.kotakPlus}>
                            <View style={styles.mapPeta}></View>
                            <IconLokasiOren style={styles.iconLokasiOren}></IconLokasiOren>
                            <Text style={styles.tekPlus}>Lokasimu sekarang</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.batas}>_________________________________________________________________</Text>

            <View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <IconFavorit style={styles.iconFavorit}></IconFavorit>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
            </View>

        </View>
    )
}

export default EditLokasi;

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
    kotakLokasi: {
        backgroundColor: '#E7E7E7',
        marginTop: 33,
        marginLeft: 28,
        height: 45,
        width: 310,
        borderRadius: 20,
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
    lokasiOren: {
        marginTop: -33,
        marginLeft: 43
    },
    tekLokasiOren: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 80
    },
    iconSearch: {
        marginTop: -19,
        marginLeft: 300
    },
    keduaKotak: {
        marginTop: -18
    },
    mapPeta: {
        //backgroundColor: '#E7E7E7',
        marginTop: 60,
        marginLeft: 28,
        height: 31,
        width: 145,
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
    iconMapPeta: {
        marginTop: -23.5,
        marginLeft: 40
    },
    tekMapPeta: {
        color: '#929292',
        marginTop: -16,
        marginLeft: 62,
        fontSize: 13
    },
    iconLokasiOren: {
        marginTop: -23,
        marginLeft: 40
    },
    tekPlus: {
        color: '#929292',
        marginTop: -16,
        marginLeft: 62,
        fontSize: 13
    },
    kotakPlus: {
        marginTop: -82,
        marginLeft: 166,
        //height: 40,
    },
    batas: {
        marginTop: 20,
        color: '#D9D9D9'
    },
    lokasi: {
        marginTop: -165,
        marginLeft: 310
    },
    mapBiru: {
        marginTop: 182,
        marginLeft: -280,
    },
    judulKota: {
        color: 'black',
        fontSize: 13,
        marginTop: -23,
        marginLeft: -243

    },
    judulAlamat: {
        color: 'black',
        marginLeft: -243,
        fontSize: 8
    },
    iconFavorit: {
        marginLeft: 3,
        marginTop: -22
    },
    garis: {
        marginTop: 4,
        marginLeft: -243,
        color: '#D9D9D9'
    },
});