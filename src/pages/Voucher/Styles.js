import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.34,
  },
  judul: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: -16,
    fontWeight: 'bold',
  },
  iconpanah: {
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 28,
  },
  searchVoucher: {
    marginTop: 20,
  },
  kotakVoucher: {
    backgroundColor: '#FFFFFF',
    marginTop: 33,
    marginLeft: 28,
    height: 45,
    width: 310,
    borderRadius: 12,
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
  iconKaliGray: {
    marginTop: -33,
    marginLeft: 43,
  },
  teksVoucher: {
    color: '#929292',
    marginTop: -19,
    marginLeft: 78,
  },
  iconArrowKanan: {
    marginTop: -16,
    marginLeft: 315,
  },
  kotak: {
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    // marginLeft: 28,
    height: 560,
    width: 359.5,
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
  },
  notFoundPeta: {
    marginTop: 80,
    marginLeft: 28,
    height: 290,
    width: 320,
  },
  judulSatu: {
    color: 'black',
    marginTop: 395,
    marginLeft: -260,
    fontSize: 18,
    fontWeight: 'bold',
  },
  judulDua: {
    color: 'black',
    marginTop: 6,
    marginTop: 420,
    marginLeft: -210,
    fontSize: 14,
  },

  // modal voucher
  kotakModal: {
    backgroundColor: '#ffff',
    marginTop: 460,
    height: 245,
    borderRadius: 10,
  },
  teksModalSatu: {
    color: 'black',
    marginTop: -10,
    marginLeft: 28,
    fontSize: 17,
    fontWeight: 'bold',
  },
  teksModalDua: {
    color: 'black',
    marginLeft: 28,
    fontSize: 14,
  },
  line: {
    color: '#ECEFF5',
    marginLeft: 28,
    marginTop: 7,
  },
  icon: {
    marginTop: 13,
    marginLeft: 290,
  },

  save: {
    flexDirection: 'row',
    marginTop: 15,
  },
  iconsave: {
    marginLeft: 5,
  },
  textsavetop: {
    color: '#000',
    marginLeft: 28,
    paddingHorizontal: 5,
  },
  textsavebottom: {
    marginLeft: 28,
    marginTop: -10,
    paddingHorizontal: 5,
    color: '#000000',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  // line: {
  //   color: '#B3B3B3',
  //   marginTop: -20,
  //   marginLeft: 37,
  // },
  button: formAlreadyFilled => ({
    backgroundColor: formAlreadyFilled ? '#598FF9' : '#929292',
    width: windowWidth * 0.8,
    height: windowWidth * 0.1,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 20,
  }),
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
