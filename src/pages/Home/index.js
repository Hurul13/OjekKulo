import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity,  } from 'react-native'
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
            navigation.navigate('CariLokasi')}}>
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

            <TouchableOpacity onPress={() => navigation.navigate('AddFavoritAddress')}>
              <View style={styles.rumah}>
                <View style={styles.kotakFavorit}></View>
                <Text style={styles.tekFavorit}>Simpan Rumah</Text>
                <IconSaveHome style={styles.saveFavorit}></IconSaveHome>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AddFavoritKantor')}>
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

const styles = StyleSheet.create({
  teks: {
    color: '#000000'
  },
  page: {
    flex: 1
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.34
  },
  hello: {
    marginTop: 40,
    marginLeft: 28,
  },
  bestie: {
    fontSize: 18,
    fontFamily: 'Roboto'
  },
  hunting: {
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  judul: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: -31,
    fontWeight: 'bold'
  },
  iconpanah: {
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 28,
  },
  setting: {
    marginLeft: 290,
    marginBottom: 0,
    marginTop: -12
  },
  more: {
    marginLeft: 320,
    marginTop: -22
  },
  kotak: {
    backgroundColor: '#FAFAFA',
    marginTop: 65,
    padding: 17,
    marginHorizontal: 25,
    height: 600,
    borderRadius: 8,
    flexDirection: 'row',
  },
  kotakpeta: {
    backgroundColor: '#D9D9D9',
    marginTop: 6,
    padding: 17,
    marginHorizontal: 5,
    height: 100,
    width: 260,
    borderRadius: 8,
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
  search: {
    //backgroundColor: '#FFFF',
    marginTop: 120,
    padding: 20,
    marginHorizontal: 8,
    marginLeft: -267,
    height: 30,
    width: 258,
    borderRadius: 20,
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
  teksSearch: {
    color: '#929292',
    marginTop: -30,
    marginLeft: -223
  },
  mapOren: {
    marginTop: -17,
    marginLeft: -250
  },
  lokasi: {
    marginTop: 5
  },
  mapBiru: {
    marginTop: 182,
    marginLeft: -253,
  },
  judulKota: {
    color: 'black',
    fontSize: 13,
    marginTop: -23,
    marginLeft: -223

  },
  judulAlamat: {
    color: 'black',
    marginLeft: -223,
    fontSize: 8
  },
  backPanah: {
    marginLeft: -28,
    marginTop: -17
  },
  garis: {
    marginTop: 4,
    marginLeft: -268,
    color: '#D9D9D9'
  },
  lokasiSatu: {
    marginTop: -164
  },
  lokasiDua: {
    marginTop: -164
  },
  savePlus: {
    marginTop: 365,
    marginLeft: -150
  },
  tekSatu: {
    color: 'black',
    marginTop: 10,
    marginLeft: -230,
    fontSize: 15
  },
  tekDua: {
    color: 'black',
    marginTop: 2,
    marginLeft: -255,
    fontSize: 12
  },
  tekTiga: {
    color: 'black',
    marginTop: 2,
    marginLeft: -195,
    fontSize: 12
  },
  kotakFavorit: {
    marginTop: 15,
    marginLeft: -267,
    height: 35,
    width: 125,
    borderRadius: 5,
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
  tekFavorit: {
    color: 'black',
    marginTop: -27,
    marginLeft: -233
  },
  saveFavorit: {
    marginTop: -14,
    marginLeft: -254
  },
  kantor: {
    marginTop: -38,
    marginLeft: 135
  }
})