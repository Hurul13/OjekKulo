import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  judul: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: -16,
    fontWeight: 'bold',
  },
  iconpanah: {
    color: 'black',
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 28,
  },
  kotakFavorit: {
    //backgroundColor: '#E7E7E7',
    marginTop: 33,
    marginLeft: 28,
    height: 85,
    width: 310,
    borderRadius: 10,
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
  iconFavoritBig: {
    marginLeft: 45,
    marginTop: -67,
  },
  teksFavorit: {
    color: 'black',
    fontSize: 15,
    marginTop: -26,
    marginLeft: 75,
  },
  teksFavoritKedua: {
    color: 'black',
    fontSize: 13,
    marginTop: 17,
    marginLeft: 45,
  },
  iconDelete: {
    marginLeft: 295,
    marginTop: -34,
  },
  iconEditt: {
    marginLeft: 260,
    marginTop: -34,
  },
  bottom: {
    marginTop: 380,
  },
  search: {
    backgroundColor: '#598FF9',
    marginTop: 128,
    marginLeft: 28,
    height: 40,
    width: 300,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //elevation: 7,
    flexDirection: 'row',
  },
  tekBottom: {
    color: '#ffff',
    marginTop: -30,
    textAlign: 'center',
    fontSize: 16,
  },

  // modal hapus
  kotakModal: {
    backgroundColor: '#ffff',
    marginTop: 330,
    height: 360,
    borderRadius: 10,
  },
  cancel: {
    color: 'black',
  },
  deleteYN: {
    marginTop: 20,
    marginLeft: 65,
  },
  teksModalSatu: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: -5,
    fontWeight: 'bold',
  },
  teksModalDua: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  },
  teksModalTiga: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 0,
  },
  kotakModalJarak1: {
    marginTop: 0,
    marginLeft: 8,
  },
  kotakModalYes: {
    // backgroundColor: '#598FF9',
    marginTop: 28,
    marginLeft: 28,
    height: 37,
    width: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#598FF9',
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
  teksModalEmpat: {
    color: '#598FF9',
    marginTop: 7,
    marginLeft: 27,
    fontSize: 16,
    fontWeight: 'bold',
  },
  kotakModalJarak2: {
    marginTop: -65,
    marginLeft: 143,
  },
  kotakModalNo: {
    backgroundColor: '#598FF9',
    marginTop: 28,
    marginLeft: 28,
    height: 37,
    width: 120,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: '#598FF9',
    // shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //elevation: 7,
    flexDirection: 'row',
  },
  teksModalLima: {
    color: '#ffff',
    marginTop: 8,
    marginLeft: 13,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
