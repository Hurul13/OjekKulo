import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  IconBackBulat,
  IconMapBiru,
  IconEdit,
  IconPaper,
  IconArrowCircleBack,
  IconBookmark,
  IconMapsBlue,
  IconMapsSearch1,
  IconLokasiBiru,
  IconMapOren,
  IconPlus
} from '../../assets';
import styles from './Styles';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NextCariLokasiDua = ({ navigation, isActive = true }) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  const [coordinateCenter, setCoordinateCenter] = useState({
    lat: -7.257472,
    lng: 112.75209,
  });
  const [coordinate, setCoordinate] = useState(coordinateCenter);

  const [currentLocation, setCurrentLocation] = useState('');

  const searchAddressName = async ({ lat, lng }) => {
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

  const onMessageReceived = ({ event, payload }) => {
    if (event === 'onMapClicked') {
      setCoordinate(payload.touchLatLng);
      searchAddressName(payload.touchLatLng);
    }
  };

  const [text, setText] = useState('');

  return (
    <ScrollView>
      <View style={styles.page}>
        <LeafletView
          mapMarkers={[
            {
              position: coordinate,
              icon: '📍',
              size: [32, 32],
            },
          ]}
          onMessageReceived={onMessageReceived}
          mapCenterPosition={coordinateCenter}
          zoom={16}
          doDebug={false}
        />
        {/* kotak alamat atas */}
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

        {/* tombol back */}
        <View>
          <TouchableOpacity onPress={() => navigateTo('')}>
            <IconBackBulat style={styles.iconBackBulat}></IconBackBulat>
          </TouchableOpacity>
        </View>

        {/* kotak footer */}
        <View style={styles.container}>
          <View style={styles.footer}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NextCariLokasiDua;
