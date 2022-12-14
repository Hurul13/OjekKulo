import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components/';
import {
  Home,
  Splash,
  CariLokasi,
  EditLokasi,
  EditLokasiJemput,
  NextCariLokasiSatu,
  NextCariLokasiDua,
  NextCariLokasiDuaSalah,
  Voucher,
  Peta,
  AddAddress,
  SearchSaveAddress,
  DataSaveAddress,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//         <Tab.Screen name="  " component={Home} />
//       </Tab.Navigator>
//   );
// };

function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CariLokasi"
        component={CariLokasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditLokasi"
        component={EditLokasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditLokasiJemput"
        component={EditLokasiJemput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NextCariLokasiSatu"
        component={NextCariLokasiSatu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NextCariLokasiDua"
        component={NextCariLokasiDua}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NextCariLokasiDuaSalah"
        component={NextCariLokasiDuaSalah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Voucher"
        component={Voucher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Peta"
        component={Peta}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchSaveAddress"
        component={SearchSaveAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DataSaveAddress"
        component={DataSaveAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;

const styles = StyleSheet.create({});
