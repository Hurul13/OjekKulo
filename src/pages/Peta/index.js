import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import {
    IconBackBulat,
    IconMapBiru,
    IconEdit,
    IconPaper, 
    IconArrowCircleBack, 
    IconBookmark, 
    IconMapsBlue, 
    IconMapsSearch1,
    IconCekList
} from '../../assets'
import styles from './Styles'
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Peta = ({ navigation }) => {

  const navigateTo = async (page) => {
    navigation.navigate(page)
  }

  const [coordinateCenter, setCoordinateCenter] = useState({
    lat: -7.257472,
    lng: 112.752090,
  });
  const [coordinate, setCoordinate] = useState(coordinateCenter);

  const [currentLocation, setCurrentLocation] = useState("");

  const searchAddressName = async ({ lat, lng }) => {
    try {

      let response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${lat},${lng}`);
      response = await response.json();

      console.log('Response Geolocation', response)

      if (response.length) {
        setCurrentLocation(response[0].display_name)
      }
    } catch (err) {
      console.log('error geolocation', err)
    }
  }

  const onMessageReceived = ({ event, payload }) => {
    if (event === "onMapClicked") {
      setCoordinate(payload.touchLatLng)
      searchAddressName(payload.touchLatLng);
    }
  }

  return (
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
      <IconCekList style={styles.iconCekList}></IconCekList>
    </View>
  )
}

export default Peta
