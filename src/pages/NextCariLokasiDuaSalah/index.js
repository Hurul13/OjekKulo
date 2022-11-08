import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  IconBackBulat,
  IconLokasiBiru,
  IconMapOren,
  IconPlus,
  IconTime,
  IconBackBulatKanan,
  IconMoreBulatKotak,
  IconLine,
  IconUang,
  IconPanahKanan,
  IconMobil,
  IconMotor,
  IconUser,
  IconX,
  IconJamBlack,
  IconJamGray,
  IconDateBlack,
  IconDateGray,
} from '../../assets';
import styles from './Styles';
import {LatLng, LeafletView} from 'react-native-leaflet-view';
import Modal from 'react-native-modal';
import {ModalDateTimePicker} from '../../components';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NextCariLokasiDuaSalah = ({navigation, isActive = true}) => {
  // untuk peta
  const [coordinateCenter, setCoordinateCenter] = useState({
    lat: -7.257472,
    lng: 112.75209,
  });
  const [coordinate, setCoordinate] = useState(coordinateCenter);

  const [currentLocation, setCurrentLocation] = useState('');

  const searchAddressName = async ({lat, lng}) => {
    try {
      let response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${lat},${lng}`,
      );
      response = await response.json();

      console.log('Response Geolocation', response);

      if (response.length) {
        setCurrentLocation(response[0].display_name);
      }
    } catch (err) {
      console.log('error geolocation', err);
    }
  };

  const onMessageReceived = ({event, payload}) => {
    if (event === 'onMapClicked') {
      setCoordinate(payload.touchLatLng);
      searchAddressName(payload.touchLatLng);
    }
  };

  // untuk navigasi atau pindah halaman
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  // untuk pemanggilan ModalDateTimePicker
  const openModal = () => {
    console.log('hmm');
    setIsModalActive(true);
  };

  const [isModalActive, setIsModalActive] = useState(false);

  const [modal, setModal] = useState(false);

  const [text, setText] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.kotakGede}>
        <ModalDateTimePicker
          isActive={isModalActive}
          onClose={setIsModalActive}
        />
        {/* <Modal isVisible={modal}>
          <View style={styles.kotakModal1}>
            <View>
              <TouchableOpacity onPress={() => setModal(false)}>
                <IconX style={styles.iconX}></IconX>
              </TouchableOpacity>
              <Text style={styles.textModal1}>Jadwalkan Perjalanan</Text>
              <Text style={styles.line}>
                ____________________________________________________
              </Text>
            </View>
            <View>
              <IconDateGray style={styles.iconDateGray}></IconDateGray>
              <Text style={styles.textModal2}>Pilih Tanggal</Text>
              <Text style={styles.line1}>
                ________________________________________________
              </Text>
            </View>
            <View>
              <IconJamGray style={styles.iconJamGray}></IconJamGray>
              <Text style={styles.textModal3}>Pilih Waktu</Text>
              <Text style={styles.line}>
                ____________________________________________________
              </Text>
            </View>
            <Text style={styles.textModal4}>
              Tanggal dan waktu akan mengiikuti zona waktu tempat penjemputanmu.
            </Text>
            <TouchableOpacity
              isVisible={isActive}
              style={styles.button(text)}
              onPress={() => navigateTo('EditAddress')}>
              <Text style={styles.textButton}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
        <View>
          <View style={styles.kotakAlamat}></View>
          <IconLokasiBiru style={styles.lokasiBiru}></IconLokasiBiru>
          <View>
            <TouchableOpacity>
              <Text style={styles.tekLokasibiru}>Lokasi kamu sekarang</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.garisLokasi}>__________________________</Text>
          <IconMapOren style={styles.lokasiOren}></IconMapOren>
          <View>
            <TouchableOpacity>
              <Text style={styles.tekLokasiOren}>Cari lokasi tujuan</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.kotakPlus}>
                <View style={styles.mapPeta}></View>
                <IconPlus style={styles.iconPlus}></IconPlus>
                <Text style={styles.tekPlus}>Tambah tujuan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigateTo('NextCariLokasiSatu')}>
            <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
          </TouchableOpacity>
        </View>

        <View style={styles.kotakLokasi}>
          <IconLine style={styles.iconLine}></IconLine>
          <Text style={styles.teksPertama}>Mau naik apa?</Text>

          <View>
            <View style={styles.kotakFavorit}></View>
            <View style={styles.batasSatu}>
              <TouchableOpacity oonPress={() => navigateTo('EditLokasi')}>
                <IconMotor style={styles.iconMotor}></IconMotor>
                <Text style={styles.teksJudul}>GoRide</Text>
                <Text style={styles.teksSatu}>9-11 menit</Text>
                <Text style={styles.teksDua}>.</Text>
                <IconUser style={styles.iconUser}></IconUser>
                <Text style={styles.teksTiga}>1</Text>
                <Text style={styles.teksEmpat}>Rp 19.000</Text>
                <Text style={styles.garisSatu}>
                  __________________________________________________
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.batasDua}>
              <TouchableOpacity onPress={() => navigateTo('EditLokasi')}>
                <IconMobil style={styles.iconMobil}></IconMobil>
                <Text style={styles.teksMobilJudul}>GoCar</Text>
                <Text style={styles.teksMobilSatu}>3-7 menit</Text>
                <Text style={styles.teksMobilDua}>.</Text>
                <IconUser style={styles.iconUser}></IconUser>
                <Text style={styles.teksMobilTiga}>4</Text>
                <Text style={styles.teksMobilEmpat}>Rp 40.500</Text>
                <Text style={styles.garisSatu}>
                  __________________________________________________
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View></View>
          </View>

          <View style={styles.kotakBgBottom}>
            <View>
              <View style={styles.bottom}>
                <TouchableOpacity>
                  <View style={styles.kotakBottom}></View>
                  <Text style={styles.tekBottomSatu}>Pesan GoRide</Text>
                  <Text style={styles.tekBottomDua}>Rp 17.000</Text>
                  <IconBackBulatKanan
                    style={styles.iconBackBulatKanan}></IconBackBulatKanan>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity onPress={() => openModal()}>
                  <IconTime style={styles.iconTime}></IconTime>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <IconMoreBulatKotak
                    style={styles.iconMoreBulatKotak}></IconMoreBulatKotak>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <View style={styles.kotakIconVoucher}>
                    <Text style={styles.teksVoucher}>Voucher</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <IconUang style={styles.iconUang}></IconUang>
                  <Text style={styles.teksKetiga}>Tunai</Text>
                  <IconPanahKanan
                    style={styles.iconPanahKanan}></IconPanahKanan>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <DateTimePickerAndroid/> */}
        </View>
      </View>
    </View>
  );
};

export default NextCariLokasiDuaSalah;
