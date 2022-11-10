import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  IconBackPanahItem,
  IconBack,
  IconKaliGray,
  IconArrowKanan,
  BgVoucher,
  NotFoundVoucher,
  IconBookmark,
} from '../../assets';
import Modal from 'react-native-modal';
import styles from './Styles';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Voucher = ({navigation, isActive = true}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [text, setText] = useState('');

  const [modal, setModal] = useState(false);

  const iconListSolid = Object.keys(IconsSolid)
    .filter(key => key !== 'fas' && key !== 'prefix')
    .map(icon => IconsSolid[icon]);

  let iconListBrand = Object.keys(IconBrand)
    .filter(key => key !== 'fab' && key !== 'prefix')
    .map(icon => IconBrand[icon]);

  library.add(...iconListBrand, ...iconListSolid);

  return (
    <View style={styles.page}>
      <Modal isVisible={modal}>
        <View style={styles.kotakModal}>
          <TouchableOpacity onPress={() => setModal(false)}>
            <FontAwesomeIcon icon={['fas', 'xmark']} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.teksModalSatu}>Masukkin kode promo di sini!</Text>
          <Text style={styles.teksModalDua}>
            Tukerin kodenya biar bisa dipakai.
          </Text>
          <Text style={styles.line}>
            -----------------------------------------------------------------------------
          </Text>

          <View style={styles.save}>
            <Text style={styles.textsavetop}>Kode promo</Text>
          </View>

          {/* <Text style={styles.textsavebottom}>Cth: Sekolah, Rumah nenek</Text> */}

          <TextInput
            style={styles.textsavebottom}
            onChangeText={newText => setText(newText)}
            placeholder="Cth: KPKOLU123"
            placeholderTextColor="#000"
            value={text}
          />

          {/* <Text style={styles.line}>________________</Text> */}
          <TouchableOpacity
            isVisible={isActive}
            style={styles.button(text)}
            onPress={() => navigateTo('#')}>
            <Text style={styles.textButton}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ImageBackground source={BgVoucher} style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigateTo('Home')}>
            <IconBack style={styles.iconpanah}></IconBack>
          </TouchableOpacity>
          <Text style={styles.judul}>Voucher</Text>
        </View>

        <View style={styles.searchVoucher}>
          <View style={styles.kotakVoucher}></View>
          <IconKaliGray style={styles.iconKaliGray}></IconKaliGray>
          <View>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Text style={styles.teksVoucher}>
                Punya kode promo? Masukkan di sini, ya..
              </Text>
              <IconArrowKanan style={styles.iconArrowKanan}></IconArrowKanan>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.kotak}>
            <Image source={NotFoundVoucher} style={styles.notFoundPeta} />
            <Text style={styles.judulSatu}>Kamu belum punya voucher</Text>
            <Text style={styles.judulDua}>
              Nanti kalau udah ada, kamu bisa cek di sini.{' '}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Voucher;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
