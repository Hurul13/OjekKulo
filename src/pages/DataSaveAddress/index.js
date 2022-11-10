import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  IconBackPanahItem,
  IconArrowBawah,
  IconFavoritBig,
  IconArrowAtas,
  IconEditt,
  IconDelete,
  IconPanahAtas,
  DeleteYN,
  IconCancel,
} from '../../assets';
import Modal from 'react-native-modal';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DataSaveAddress = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [modal, setModal] = useState(false);

  return (
    <View style={styles.page}>
      {/* membuka model harus ada icon hapusnya
     <TouchableOpacity onPress={() => setModal(true)}>
        <IconDelete></IconDelete>
     </TouchableOpacity>
     */}
      <Modal isVisible={modal}>
        <View style={styles.kotakModal}>
          <Image source={DeleteYN} style={styles.deleteYN} />
          <Text style={styles.teksModalSatu}>Mau hapus alamat ini?</Text>
          <Text style={styles.teksModalDua}>
            Nanti kamu harus ngetik lagi tiap mau pakai alamat ini
          </Text>
          <Text style={styles.teksModalTiga}>disemua layanan Gojek</Text>
          <TouchableOpacity onPress={() => navigateTo('AddAddress')}>
            <View style={styles.kotakModalJarak1}>
              <View style={styles.kotakModalYes}>
                <Text style={styles.teksModalEmpat}>Iya, hapus</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModal(false)}>
            <View style={styles.kotakModalJarak2}>
              <View style={styles.kotakModalNo}>
                <Text style={styles.teksModalLima}>Tidak, kembali</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
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
        <TouchableOpacity onPress={() => setModal(true)}>
          <IconDelete style={styles.iconDelete}></IconDelete>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('SearchSaveAddress')}>
          <IconEditt style={styles.iconEditt}></IconEditt>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigateTo('SearchSaveAddress')}>
          <View style={styles.search}></View>
          <Text style={styles.tekBottom}>Tambah Alamat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DataSaveAddress;
