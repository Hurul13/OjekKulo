import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  //   kotak alamat
  kotakAlamat: {
    backgroundColor: '#ffff',
    marginTop: 80,
    marginLeft: 28,
    height: 68,
    width: 310,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //elevation: 7,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  lokasiBiru: {
    marginTop: -58,
    marginLeft: 38,
  },
  tekLokasibiru: {
    color: '#929292',
    marginTop: -18,
    marginLeft: 70,
  },
  garisLokasi: {
    marginTop: -7,
    marginLeft: 70,
    color: '#D9D9D9',
  },
  lokasiOren: {
    marginTop: 1,
    marginLeft: 38,
  },
  tekLokasiOren: {
    color: '#929292',
    marginTop: -18,
    marginLeft: 70,
  },
  mapPeta: {
    //backgroundColor: '#E7E7E7',
    marginTop: 60,
    marginLeft: 28,
    height: 31,
    width: 110,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //elevation: 7,
    flexDirection: 'row',
  },
  iconPlus: {
    marginTop: -22,
    marginLeft: 34,
  },
  tekPlus: {
    color: '#929292',
    marginTop: -15,
    marginLeft: 53,
    fontSize: 13,
  },
  kotakPlus: {
    marginTop: -100,
    marginLeft: 190,
  },

  //   tombol back
  iconBackBulat: {
    marginTop: 210,
    marginLeft: 28,
  },

//   kotak footer
  container: {
    marginTop: 0,
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
});

export default styles;
