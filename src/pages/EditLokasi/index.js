import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  IconBackPanahItem,
  IconFavorit,
  IconMapBiru,
  IconMapOren,
  IconMapPeta,
  IconSearch,
  IconLokasiOren,
} from '../../assets';
import styles from './Styles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const EditLokasi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [text, setText] = useState('');

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
          <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
        </TouchableOpacity>
        <Text style={styles.judul}>Edit Alamat</Text>
      </View>

      <View>
        <View style={styles.kotakLokasi}></View>
        <IconMapOren style={styles.lokasiOren}></IconMapOren>
        <TextInput
          style={styles.textsavebottom}
          onChangeText={newText => setText(newText)}
          placeholder="Cari lokasi tujuan"
          placeholderTextColor="#000"
          value={text}
        />
        <IconSearch style={styles.iconSearch}></IconSearch>
      </View>

      <View style={styles.keduaKotak}>
        <TouchableOpacity onPress={() => navigateTo('Peta')}>
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

      <Text style={styles.batas}>
        _________________________________________________________________
      </Text>

      <View>
        <View style={styles.lokasi}>
          <TouchableOpacity onPress={() => navigateTo('NextCariLokasiSatu')}>
            <IconMapBiru style={styles.mapBiru}></IconMapBiru>
            <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
            <Text style={styles.judulAlamat}>
              Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigateTo('DataSaveAddress')}>
              <IconFavorit style={styles.iconFavorit}></IconFavorit>
            </TouchableOpacity>
          </View>
          <Text style={styles.garis}>
            _____________________________________________________
          </Text>
        </View>
        <View style={styles.lokasi}>
          <TouchableOpacity onPress={() => navigateTo('NextCariLokasiSatu')}>
            <IconMapBiru style={styles.mapBiru}></IconMapBiru>
            <Text style={styles.judulKota}>Stasiun Surabaya Pasar Turi</Text>
            <Text style={styles.judulAlamat}>
              Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigateTo('DataSaveAddress')}>
              <IconFavorit style={styles.iconFavorit}></IconFavorit>
            </TouchableOpacity>
          </View>
          <Text style={styles.garis}>
            _____________________________________________________
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EditLokasi;
