import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
  ImageHeader,
  IconBack,
  IconSetting,
  IconMore,
  IconMapOren,
  IconMapBiru,
  IconBackPanah,
  IconSavePlus,
  IconSaveHome,
  IconSaveKantor
} from '../../assets'
import styles from './Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>

        <View>
          <TouchableOpacity>
            <IconBack style={styles.iconpanah}></IconBack>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSetting style={styles.setting}></IconSetting>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMore style={styles.more}></IconMore>
          </TouchableOpacity>
          <Text style={styles.judul}>Transportasi</Text>
        </View>

        <View style={styles.hello}>
          <Text style={styles.bestie}>Mau Ke mana, Bestie?</Text>
          <Text style={styles.hunting}>Hunting mochi kayaknya enak, deh.</Text>
        </View>

        <View style={styles.kotak}>
          <TouchableOpacity>
            <View style={styles.kotakpeta}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(1)
            navigation.navigate('CariLokasi')
          }}>
            <View style={styles.search}></View>
            <Text style={styles.teksSearch}>Cari tujuan (cth : "park regency")</Text>
            <IconMapOren style={styles.mapOren}></IconMapOren>

          </TouchableOpacity>

          <View>
            <View style={styles.lokasi}>
              <TouchableOpacity>
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>_______________________________________________</Text>
            </View>

            <View style={styles.lokasiSatu}>
              <TouchableOpacity>
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>_______________________________________________</Text>
            </View>

            <View style={styles.lokasiDua}>
              <TouchableOpacity >
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
                <Text style={styles.judulAlamat}>Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>_______________________________________________</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity>
              <IconSavePlus style={styles.savePlus}></IconSavePlus>
            </TouchableOpacity>
            <Text style={styles.tekSatu}>Simpan alamat. pesan lebih cepat</Text>
            <Text style={styles.tekDua}>Ada alamat yang sering dipakai? Simpan yuk, biar</Text>
            <Text style={styles.tekTiga}>gak ribet ketik alamat lagi</Text>

            <TouchableOpacity onPress={() => {
              console.log(1)
              navigation.navigate('AddFavoritAddress')
            }}>
              <View style={styles.rumah}>
                <View style={styles.kotakFavorit}></View>
                <Text style={styles.tekFavorit}>Simpan Rumah</Text>
                <IconSaveHome style={styles.saveFavorit}></IconSaveHome>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              console.log(1)
              navigation.navigate('AddFavoritKantor')
            }}>
              <View style={styles.kantor}>
                <View style={styles.kotakFavorit}></View>
                <Text style={styles.tekFavorit}>Simpan Kantor</Text>
                <IconSaveKantor style={styles.saveFavorit}></IconSaveKantor>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
