import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
        flex: 1
    },
  judul: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: -16,
    fontWeight: 'bold'
  },
  iconpanah: {
    color: 'black',
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 28,
  },
  judul: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginTop: -16,
    fontWeight: 'bold'
  },
  iconpanah: {
    color: 'black',
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 28,
  },
  notFoundPeta: {
    marginTop: 90,
    marginLeft: 28,
    height: 290,
    width: 320
  },
  judulSatu: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  judulDua: {
    color: 'black',
    marginTop: 6,
    textAlign: 'center',
    fontSize: 14,
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
    fontSize: 16
  }
})

export default styles;