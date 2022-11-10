import { Dimensions, StyleSheet } from "react-native";

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
  kotakLokasi: {
    backgroundColor: '#E7E7E7',
    marginTop: 33,
    marginLeft: 28,
    height: 45,
    width: 310,
    borderRadius: 20,
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
  lokasiOren: {
    marginTop: -33,
    marginLeft: 43,
  },
  textsavebottom: {
    marginLeft: 68,
    marginTop: -35,
    paddingHorizontal: 5,
    color: '#000000',
    // borderBottomColor: '#000',
    // borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  tekLokasiOren: {
    color: '#929292',
    marginTop: -18,
    marginLeft: 80,
  },
  iconSearch: {
    marginTop: -34,
    marginLeft: 300,
  },
  keduaKotak: {
    marginTop: -18,
  },
  mapPeta: {
    //backgroundColor: '#E7E7E7',
    marginTop: 60,
    marginLeft: 28,
    height: 31,
    width: 145,
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
  iconMapPeta: {
    marginTop: -23.5,
    marginLeft: 40,
  },
  tekMapPeta: {
    color: '#929292',
    marginTop: -16,
    marginLeft: 62,
    fontSize: 13,
  },
  iconLokasiOren: {
    marginTop: -23,
    marginLeft: 40,
  },
  tekPlus: {
    color: '#929292',
    marginTop: -16,
    marginLeft: 62,
    fontSize: 13,
  },
  kotakPlus: {
    marginTop: -82,
    marginLeft: 166,
    //height: 40,
  },
  batas: {
    marginTop: 20,
    color: '#D9D9D9',
  },
  lokasi: {
    marginTop: -165,
    marginLeft: 310,
  },
  mapBiru: {
    marginTop: 182,
    marginLeft: -280,
  },
  judulKota: {
    color: 'black',
    fontSize: 13,
    marginTop: -23,
    marginLeft: -243,
  },
  judulAlamat: {
    color: 'black',
    marginLeft: -243,
    fontSize: 8,
  },
  iconFavorit: {
    marginLeft: 3,
    marginTop: -22,
  },
  garis: {
    marginTop: 4,
    marginLeft: -243,
    color: '#D9D9D9',
  },
});

export default styles;