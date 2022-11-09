import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  IconBackBulat,
  IconMapBiru,
  IconEdit,
  IconPaper,
  IconArrowCircleBack,
  IconBookmark,
  IconMapsBlue,
  IconMapsSearch1,
} from '../../assets';
import styles from './Styles';
import {LatLng, LeafletView} from 'react-native-leaflet-view';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NextCariLokasiSatu = ({navigation, isActive = true}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

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
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigateTo('EditLokasi')}>
            <IconBackBulat style={styles.back} />
          </TouchableOpacity>
          <View style={styles.footer}>
            <View style={styles.header}>
              <Text style={styles.judul}>Cek lagi titik jemput di peta</Text>
              <Text style={styles.judulKecil}>
                Pilih lokasi strategis terdekat.
              </Text>
              <TouchableOpacity onPress={() => navigateTo('EditLokasiJemput')}>
                <IconEdit style={styles.iconmapsedit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.line}>
              ______________________________________________________
            </Text>
            <View style={styles.address}>
              <IconMapsBlue style={styles.iconmapblue} />
              <Text style={styles.textaddresstop}>{currentLocation}</Text>
            </View>
            {/* <Text style={styles.textaddressbottom}>Jl. Park Regency Blok B No.9, RT.000/RW.00, Keputih, Kec.</Text>
                    <Text style={styles.textaddressbottom1}>Sukolilo, Kota SBY, Jawa Timur 60111, Indonesia</Text> */}
            <View style={styles.save}>
              <IconPaper style={styles.iconsave} />
              <Text style={styles.textsavetop}>Catatan buat driver</Text>
            </View>

            {/* <Text style={styles.textsavebottom}>Cth: Sekolah, Rumah nenek</Text> */}

            <TextInput
              style={styles.textsavebottom}
              onChangeText={newText => setText(newText)}
              placeholder="Yang pake baju merah. Jangan sampe lolos ~"
              placeholderTextColor="#000"
              value={text}
            />

            <TouchableOpacity
              isVisible={isActive}
              style={styles.button(text)}
              onPress={() => navigateTo('NextCariLokasiDua')}>
              <Text style={styles.textButton}>Lanjut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NextCariLokasiSatu;
