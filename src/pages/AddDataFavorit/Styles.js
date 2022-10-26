import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    iconBackBulat: {
        marginTop: 440,
        marginLeft: 28
    },
    kotakLokasi: {
        backgroundColor: '#ffff',
        marginTop: 10,
        //marginLeft: 28,
        height: 260,
        width: 356,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        // flexDirection: 'row',
    },
    teksPertama: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 28
    },
    iconMapSearch: {
        marginLeft: 310,
        marginTop: -14
    },
    iconMapBiru: {
        marginLeft: 28,
        marginTop: 25
    },
    teksJudulKota: {
        color: 'black',
        marginLeft: 65,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 14
    },
    teksAlamat: {
        color: 'black',
        marginLeft: 65,
        marginTop: 1,
        fontSize: 11,
    },
    iconFavoritBlack: {
        marginLeft: 28,
        marginTop: 25
    },
    teks: {
        color: 'black',
        marginLeft: 65,
        marginTop: -25,
        fontSize: 11,
    },
    teksDua: {
        color: '#929292',
        marginLeft: 65,
        marginTop: 1,
        fontSize: 14,
    },
    search: {
        backgroundColor: '#929292',
        marginTop: 25,
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