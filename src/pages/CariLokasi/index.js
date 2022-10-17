import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
    IconBackPanahItem,
    IconFavorit,
    IconLokasiBiru,
    IconMapBiru,
    IconMapOren,
    IconMapPeta,
    IconMoreGray,
    IconPlus
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CariLokasi = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
                </TouchableOpacity>
                <Text style={styles.judul}>Mau ke mana hari ini?</Text>
            </View>

            <View>
                <View style={styles.kotakLokasi}></View>
                <IconLokasiBiru style={styles.lokasiBiru}></IconLokasiBiru>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.tekLokasibiru}>Lokasi kamu sekarang</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.garisLokasi}>___________________________________________</Text>
                <IconMapOren style={styles.lokasiOren}></IconMapOren>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.tekLokasiOren}>Cari lokasi tujuan</Text>
                    </TouchableOpacity>
                </View>
                <IconMoreGray style={styles.moreGray}></IconMoreGray>
            </View>

            <View>
                <TouchableOpacity>
                    <View>
                        <View style={styles.mapPeta}></View>
                        <IconMapPeta style={styles.iconMapPeta}></IconMapPeta>
                        <Text style={styles.tekMapPeta}>Pilih lewat peta</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.kotakPlus}>
                        <View style={styles.mapPeta}></View>
                        <IconPlus style={styles.iconPlus}></IconPlus>
                        <Text style={styles.tekPlus}>Tambah tujuan</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.batas}>_________________________________________________________________</Text>

            <View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
                <View style={styles.lokasi}>
                    <TouchableOpacity>
                        <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                        <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                        <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFavorit style={styles.iconFavorit}></IconFavorit>
                    </TouchableOpacity>
                    <Text style={styles.garis}>_____________________________________________________</Text>
                </View>
            </View>

        </View>
    )
}

export default CariLokasi;

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
        height: 95,
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
        marginTop: -75,
        marginLeft: 43
    },
    tekLokasibiru: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 80
    },
    garisLokasi: {
        marginTop: -1,
        marginLeft: 80,
        color: '#D9D9D9'
    },
    lokasiOren: {
        marginTop: 6,
        marginLeft: 43
    },
    tekLokasiOren: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 80
    },
    moreGray: {
        marginTop: -34.5,
        marginLeft: 50
    },
    mapPeta: {
        //backgroundColor: '#E7E7E7',
        marginTop: 60,
        marginLeft: 28,
        height: 31,
        width: 125,
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
    iconPlus: {
        marginTop: -22,
        marginLeft: 40
    },
    tekPlus: {
        color: '#929292',
        marginTop: -15,
        marginLeft: 62,
        fontSize: 13
    },
    kotakPlus: {
        marginTop: -82,
        marginLeft: 182
    },
    batas: {
        marginTop: 15,
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