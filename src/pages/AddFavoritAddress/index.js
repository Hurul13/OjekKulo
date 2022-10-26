import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
  IconBackPanahItem,
  NotFoundPeta
} from '../../assets'
import styles from './Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AddFavoritAddress = ({ navigation }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => {
            console.log(1)
            navigation.navigate('Home')}}>
          <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
        </TouchableOpacity>
        <Text style={styles.judul}>Alamat favorit</Text>
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

export default AddFavoritAddress

