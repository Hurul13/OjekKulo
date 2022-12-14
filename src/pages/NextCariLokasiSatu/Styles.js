import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginTop: 440,
  },
  back: {
    marginLeft: 28,
    width: windowWidth * 0.08,
    marginTop: -20,
    // backgroundColor: '#000'
  },
  footer: {
    backgroundColor: '#ffff',
    width: windowWidth,
    height: windowWidth * 0.95,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8,
    resizeMode: 'cover',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
  },
  judul: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 25,
    paddingHorizontal: 1,
  },
  judulKecil: {
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 10,
    marginTop: 45,
    marginLeft: -170,
    // paddingHorizontal: 1,
  },
  iconmapsedit: {
    marginTop: 28,
    marginLeft: 162,
  },
  address: {
    flexDirection: 'row',
  },
  iconmapblue: {
    marginTop: 20,
    marginLeft: 5,
  },
  textaddresstop: {
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 13,
    paddingHorizontal: 5,
    color: '#000',
  },
  // textaddressbottom: {
  //     marginLeft: 38,
  //     marginTop: 5,
  //     fontSize: 11,
  //     color: '#929292',
  // },
  // textaddressbottom1: {
  //     marginLeft: 38,
  //     fontSize: 11,
  //     color: '#929292'
  // },
  save: {
    flexDirection: 'row',
    marginTop: 15,
  },
  iconsave: {
    marginLeft: 5,
  },
  textsavetop: {
    color: '#000',
    marginLeft: 16,
    paddingHorizontal: 5,
  },
  textsavebottom: {
    marginLeft: 32,
    marginTop: -10,
    paddingHorizontal: 5,
    color: '#000000',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  line: {
    color: '#B3B3B3',
    marginTop: 5,
  },
  button: formAlreadyFilled => ({
    backgroundColor: formAlreadyFilled ? '#598FF9' : '#929292',
    width: windowWidth * 0.9,
    height: windowWidth * 0.1,
    borderRadius: 100,
    marginTop: 22,
    marginLeft: -10,
  }),
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
