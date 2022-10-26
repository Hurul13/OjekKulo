import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    teks: {
        color: '#000000'
    },
    page: {
        flex: 1
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.34
    },
    hello: {
        marginTop: 40,
        marginLeft: 28,
    },
    bestie: {
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    hunting: {
        fontSize: 12,
        fontFamily: 'Roboto'
    },
    judul: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: -31,
        fontWeight: 'bold'
    },
    iconpanah: {
        marginBottom: 0,
        marginTop: 30,
        marginLeft: 28,
    },
    setting: {
        marginLeft: 290,
        marginBottom: 0,
        marginTop: -12
    },
    more: {
        marginLeft: 320,
        marginTop: -22
    },
    kotak: {
        backgroundColor: '#FAFAFA',
        marginTop: 65,
        padding: 17,
        marginHorizontal: 25,
        height: 600,
        borderRadius: 8,
        flexDirection: 'row',
    },
    kotakpeta: {
        backgroundColor: '#D9D9D9',
        marginTop: 6,
        padding: 17,
        marginHorizontal: 5,
        height: 100,
        width: 260,
        borderRadius: 8,
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
    search: {
        //backgroundColor: '#FFFF',
        marginTop: 120,
        padding: 20,
        marginHorizontal: 8,
        marginLeft: -267,
        height: 30,
        width: 258,
        borderRadius: 20,
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
    teksSearch: {
        color: '#929292',
        marginTop: -30,
        marginLeft: -223
    },
    mapOren: {
        marginTop: -17,
        marginLeft: -250
    },
    lokasi: {
        marginTop: 5
    },
    mapBiru: {
        marginTop: 182,
        marginLeft: -253,
    },
    judulKota: {
        color: 'black',
        fontSize: 13,
        marginTop: -23,
        marginLeft: -223

    },
    judulAlamat: {
        color: 'black',
        marginLeft: -223,
        fontSize: 8
    },
    backPanah: {
        marginLeft: -28,
        marginTop: -17
    },
    garis: {
        marginTop: 4,
        marginLeft: -268,
        color: '#D9D9D9'
    },
    lokasiSatu: {
        marginTop: -164
    },
    lokasiDua: {
        marginTop: -164
    },
    savePlus: {
        marginTop: 365,
        marginLeft: -150
    },
    tekSatu: {
        color: 'black',
        marginTop: 10,
        marginLeft: -230,
        fontSize: 15
    },
    tekDua: {
        color: 'black',
        marginTop: 2,
        marginLeft: -255,
        fontSize: 12
    },
    tekTiga: {
        color: 'black',
        marginTop: 2,
        marginLeft: -195,
        fontSize: 12
    },
    kotakFavorit: {
        marginTop: 15,
        marginLeft: -267,
        height: 35,
        width: 125,
        borderRadius: 5,
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
    tekFavorit: {
        color: 'black',
        marginTop: -27,
        marginLeft: -233
    },
    saveFavorit: {
        marginTop: -14,
        marginLeft: -254
    },
    kantor: {
        marginTop: -38,
        marginLeft: 135
    }
})

export default styles;