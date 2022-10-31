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
import styles from './Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AddDataFavorit = ({ navigation }) => {
    const navigateTo = async (page) => {
        navigation.navigate(page)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => navigateTo('CariLokasi')}>
                <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
            </TouchableOpacity>
            <View style={styles.kotakLokasi}>
                <View>
                    <Text style={styles.teksPertama}>Tambah Alamat</Text>
                    <TouchableOpacity>
                        <IconMapSearch style={styles.iconMapSearch}></IconMapSearch>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigateTo('EditLokasi')}>
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
                    <TouchableOpacity onPress={() => navigateTo('AddDataFavoritNote')}>
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

