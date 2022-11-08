import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo, SplashBG} from '../../assets/images';
import styles from './Styles';

const Splash = ({navigation}) => {
  const navigateTo = async page => {
    navigation.navigate(page);
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBG} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;
