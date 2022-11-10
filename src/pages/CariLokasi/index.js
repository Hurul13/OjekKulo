import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  IconBackPanahItem,
  IconFavorit,
  IconLokasiBiru,
  IconMapBiru,
  IconMapOren,
  IconMapPeta,
  IconMoreGray,
  IconPlus,
} from '../../assets';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CariLokasi = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
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
        <Text style={styles.garisLokasi}>
          ___________________________________________
        </Text>
        <IconMapOren style={styles.lokasiOren}></IconMapOren>
        <View>
          <TouchableOpacity>
            <Text style={styles.tekLokasiOren}>Cari lokasi tujuan</Text>
          </TouchableOpacity>
        </View>
        <IconMoreGray style={styles.moreGray}></IconMoreGray>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigateTo('Peta')}>
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
          <TouchableOpacity onPress={() => navigateTo('DataSaveAddress')}>
            <IconFavorit style={styles.iconFavorit}></IconFavorit>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigateTo('DataSaveAddress')}>
            <IconFavorit style={styles.iconFavorit}></IconFavorit>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigateTo('DataSaveAddress')}>
            <IconFavorit style={styles.iconFavorit}></IconFavorit>
          </TouchableOpacity>
          <Text style={styles.garis}>
            _____________________________________________________
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CariLokasi;
