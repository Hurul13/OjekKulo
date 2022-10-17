import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home, 
  Splash, 
  CariLokasi, 
  AddFavoritAddress, 
  AddFavoritKantor, 
  DetailLokasiPilih, 
  DetailLokasiPilihAdd, 
  EditLokasi} from '../pages';
import {BottomNavigator} from '../components/';

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
        <Stack.Screen name="AddFavoritKantor" component={AddFavoritKantor} options={{headerShown: false}}/>
        <Stack.Screen name="DetailLokasiPilih" component={DetailLokasiPilih} options={{headerShown: false}}/>
        <Stack.Screen name="DetailLokasiPilihAdd" component={DetailLokasiPilihAdd} options={{headerShown: false}}/>
        <Stack.Screen name="EditLokasi" component={EditLokasi} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};

export default Router 

const styles = StyleSheet.create({})