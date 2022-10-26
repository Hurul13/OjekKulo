import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        marginTop: -67
    },
    teksFavorit: {
        color: 'black',
        fontSize: 15,
        marginTop: -26,
        marginLeft: 75
    },
    teksFavoritKedua: {
        color: 'black',
        fontSize: 13,
        marginTop: 17,
        marginLeft: 45
    },
    iconArrowBawah: {
        marginLeft: 290,
        marginTop: -34
    },
    bottom: {
        marginTop: 380
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