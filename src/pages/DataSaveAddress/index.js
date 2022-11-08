import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  IconBackPanahItem,
  IconArrowBawah,
  IconFavoritBig,
  IconArrowAtas,
} from '../../assets';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DataSaveAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
          <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
        </TouchableOpacity>
        <Text style={styles.judul}>Alamat favorit</Text>
      </View>

      <View>
        <View style={styles.kotakFavorit}></View>
        <IconFavoritBig style={styles.iconFavoritBig}></IconFavoritBig>
        <Text style={styles.teksFavorit}>Tempat Magang</Text>
        <Text style={styles.teksFavoritKedua}>
          Jl. Park Regency Blok B No.9
        </Text>
        <TouchableOpacity>
          <IconArrowBawah style={styles.iconArrowBawah}></IconArrowBawah>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity>
          <View style={styles.search}></View>
          <Text style={styles.tekBottom}>Tambah Alamat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DataSaveAddress;
