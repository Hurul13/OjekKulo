import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  ImageHeader,
  IconBack,
  IconSetting,
  IconMore,
  IconMapOren,
  IconMapBiru,
  IconBackPanah,
  IconSavePlus,
  IconSaveHome,
  IconSaveKantor,
  IconCekList,
} from '../../assets';
import styles from './Styles';
import {LatLng, LeafletView} from 'react-native-leaflet-view';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = ({navigation}) => {
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

  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View>
          <TouchableOpacity>
            <IconBack style={styles.iconpanah}></IconBack>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSetting style={styles.setting}></IconSetting>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMore style={styles.more}></IconMore>
          </TouchableOpacity>
          <Text style={styles.judul}>Transportasi</Text>
        </View>

        <View style={styles.hello}>
          <Text style={styles.bestie}>Mau Ke mana, Bestie?</Text>
          <Text style={styles.hunting}>Hunting mochi kayaknya enak, deh.</Text>
        </View>

        <View style={styles.kotak}>
          <TouchableOpacity onPress={() => navigateTo('Peta')}>
            <View style={styles.kotakpeta}>
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
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('CariLokasi')}>
            <View style={styles.search}></View>
            <Text style={styles.teksSearch}>
              Cari tujuan (cth : "park regency")
            </Text>
            <IconMapOren style={styles.mapOren}></IconMapOren>
          </TouchableOpacity>

          <View>
            <View style={styles.lokasi}>
              <TouchableOpacity
                onPress={() => navigateTo('NextCariLokasiSatu')}>
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>
                  Stasiun Surabaya Pasar Turi
                </Text>
                <Text style={styles.judulAlamat}>
                  Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172
                </Text>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>
                _______________________________________________
              </Text>
            </View>

            <View style={styles.lokasiSatu}>
              <TouchableOpacity
                onPress={() => navigateTo('NextCariLokasiSatu')}>
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>
                  Stasiun Surabaya Pasar Turi
                </Text>
                <Text style={styles.judulAlamat}>
                  Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172
                </Text>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>
                _______________________________________________
              </Text>
            </View>

            <View style={styles.lokasiDua}>
              <TouchableOpacity
                onPress={() => navigateTo('NextCariLokasiSatu')}>
                <IconMapBiru style={styles.mapBiru}></IconMapBiru>
                <Text style={styles.judulKota}>
                  Stasiun Surabaya Pasar Turi
                </Text>
                <Text style={styles.judulAlamat}>
                  Jl. Semarang, Gundih, Bubutan, Kota Surabaya, 60172
                </Text>
                <IconBackPanah style={styles.backPanah}></IconBackPanah>
              </TouchableOpacity>
              <Text style={styles.garis}>
                _______________________________________________
              </Text>
            </View>
          </View>

          <View>
            <IconSavePlus style={styles.savePlus}></IconSavePlus>
            <Text style={styles.tekSatu}>Simpan alamat. pesan lebih cepat</Text>
            <Text style={styles.tekDua}>
              Ada alamat yang sering dipakai? Simpan yuk, biar
            </Text>
            <Text style={styles.tekTiga}>gak ribet ketik alamat lagi</Text>

            <TouchableOpacity onPress={() => navigateTo('AddFavoritAddress')}>
              <View style={styles.rumah}>
                <View style={styles.kotakFavorit}></View>
                <Text style={styles.tekFavorit}>Simpan Rumah</Text>
                <IconSaveHome style={styles.saveFavorit}></IconSaveHome>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('AddFavoritAddress')}>
              <View style={styles.kantor}>
                <View style={styles.kotakFavorit}></View>
                <Text style={styles.tekFavorit}>Simpan Kantor</Text>
                <IconSaveKantor style={styles.saveFavorit}></IconSaveKantor>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
