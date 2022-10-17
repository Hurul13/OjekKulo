import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
  IconBackPanahItem,
  IconFavorit,
  IconLokasiBiru,
  IconMapBiru,
  IconMapOren,
  IconMapPeta,
  IconMoreGray,
  IconPlus,
  NotFoundPeta
} from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AddFavoritKantor = ({ navigation }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
        </TouchableOpacity>
        <Text style={styles.judul}>Kantor favorit</Text>
      </View>
      <View>
        <Image source={NotFoundPeta} style={styles.notFoundPeta} />
        <Text style={styles.judulSatu}>Tambahin alamat favoritmu, yuk?</Text>
        <Text style={styles.judulDua}>Nyari alamat yang sering kamu pakai cuma dengan </Text>
        <Text style={styles.judulDua}>satu klik saja!</Text>
      </View>

      <TouchableOpacity>
        <View>
          <View style={styles.search}></View>
          <Text style={styles.tekBottom}>Tambah Alamat</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

export default AddFavoritKantor

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
  notFoundPeta: {
    marginTop: 90,
    marginLeft: 28,
    height: 290,
    width: 320
  },
  judulSatu: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  judulDua: {
    color: 'black',
    marginTop: 6,
    textAlign: 'center',
    fontSize: 14,
  },
  search: {
    backgroundColor: '#598FF9',
    marginTop: 128,
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