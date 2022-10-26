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
import styles from './Styles'
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

