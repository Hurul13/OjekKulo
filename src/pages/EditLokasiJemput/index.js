import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react';
import {
    IconBackPanahItem,
    IconLokasiBiru,
    IconMapPeta,
    IconMoreGray,
    IconPlusGray,
    IconMapGray
} from '../../assets'
import styles from './Styles'
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const EditLokasiJemput = ({ navigation }) => {
    const navigateTo = async (page) => {
    navigation.navigate(page)
  }

  const [text, setText] = useState('');
  
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => navigateTo('Home')}>
            <IconBackPanahItem style={styles.iconpanah}></IconBackPanahItem>
          </TouchableOpacity>
          <Text style={styles.judul}>Set lokasi jemput</Text>
        </View>

        <View>
          <View style={styles.kotakLokasi}></View>
          <IconLokasiBiru style={styles.lokasiBiru}></IconLokasiBiru>
          <TextInput
            style={styles.textsavebottom}
            onChangeText={newText => setText(newText)}
            placeholder="Lokasi kamu sekarang"
            placeholderTextColor="#000"
            value={text}
          />
          <Text style={styles.garisLokasi}>
            ___________________________________________
          </Text>
          <IconMapGray style={styles.lokasiOren}></IconMapGray>
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
              <IconPlusGray style={styles.iconPlus}></IconPlusGray>
              <Text style={styles.tekPlus}>Tambah tujuan</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.batas}>
          _________________________________________________________________
        </Text>
      </View>
    );
}

export default EditLokasiJemput;

