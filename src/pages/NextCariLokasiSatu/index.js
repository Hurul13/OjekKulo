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
    IconMapsSearch1
} from '../../assets'
import styles from './Styles'
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const NextCariLokasiSatu = ({ navigation }) => {
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
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateTo('app-favaddress')}>
                    <IconArrowCircleBack style={styles.back} />
                </TouchableOpacity>
                <View style={styles.footer}>
                    <View style={styles.header}>
                        <Text style={styles.judul}>Tambah Alamat</Text>
                        <TouchableOpacity onPress={() => navigateTo('EditAddress')}>
                            <IconMapsSearch1 style={styles.iconmapssearch} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.address}>
                        <IconMapsBlue style={styles.iconmapblue} />
                        <Text style={styles.textaddresstop}>{currentLocation}</Text>
                    </View>
                    {/* <Text style={styles.textaddressbottom}>Jl. Park Regency Blok B No.9, RT.000/RW.00, Keputih, Kec.</Text>
                    <Text style={styles.textaddressbottom1}>Sukolilo, Kota SBY, Jawa Timur 60111, Indonesia</Text> */}
                    <View style={styles.save}>
                        <IconBookmark style={styles.iconsave} />
                        <Text style={styles.textsavetop}>Nama alamat</Text>
                    </View>
                    <Text style={styles.textsavebottom}>Cth: Sekolah, Rumah nenek</Text>
                    <Text style={styles.line}>________________</Text>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Simpan</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NextCariLokasiSatu

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

