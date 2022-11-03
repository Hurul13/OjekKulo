import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components/';
import {
  Home, 
  Splash, 
  CariLokasi, 
  AddFavoritAddress, 
  IsiFavoritAddress, 
  AddFavoritKantor, 
  AddDataFavorit, 
  AddDataFavoritNote, 
  EditLokasi,
  EditLokasiJemput,
  NextCariLokasiSatu,
  NextCariLokasiDua,
  Voucher,
  Peta,
  //ModalDateTimePicker
  //CobaSatu
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
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="CariLokasi" component={CariLokasi} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="AddFavoritAddress" component={AddFavoritAddress} options={{headerShown: false}}/>
        <Stack.Screen name="IsiFavoritAddress" component={IsiFavoritAddress} options={{headerShown: false}}/>
        <Stack.Screen name="AddFavoritKantor" component={AddFavoritKantor} options={{headerShown: false}}/>
        <Stack.Screen name="AddDataFavorit" component={AddDataFavorit} options={{headerShown: false}}/>
        <Stack.Screen name="AddDataFavoritNote" component={AddDataFavoritNote} options={{headerShown: false}}/>
        <Stack.Screen name="EditLokasi" component={EditLokasi} options={{headerShown: false}}/>
        <Stack.Screen name="EditLokasiJemput" component={EditLokasiJemput} options={{headerShown: false}}/>
        <Stack.Screen name="NextCariLokasiSatu" component={NextCariLokasiSatu} options={{headerShown: false}}/>
        <Stack.Screen name="NextCariLokasiDua" component={NextCariLokasiDua} options={{headerShown: false}}/>
        <Stack.Screen name="Voucher" component={Voucher} options={{headerShown: false}}/>
        <Stack.Screen name="Peta" component={Peta} options={{headerShown: false}}/>
        {/* <Stack.Screen name="ModalDateTimePicker" component={ModalDateTimePicker} options={{headerShown: false}}/> */}
      </Stack.Navigator>
  );
};

export default Router 

const styles = StyleSheet.create({})