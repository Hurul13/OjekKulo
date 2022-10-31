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
    kotakLokasi: {
        backgroundColor: '#E7E7E7',
        marginTop: 33,
        marginLeft: 28,
        height: 95,
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
    },
    lokasiBiru: {
        marginTop: -75,
        marginLeft: 43
    },
    tekLokasibiru: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 80
    },
    garisLokasi: {
        marginTop: -1,
        marginLeft: 80,
        color: '#D9D9D9'
    },
    lokasiOren: {
        marginTop: 6,
        marginLeft: 43
    },
    tekLokasiOren: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 80
    },
    moreGray: {
        marginTop: -34.5,
        marginLeft: 50
    },
    mapPeta: {
        //backgroundColor: '#E7E7E7',
        marginTop: 60,
        marginLeft: 28,
        height: 31,
        width: 125,
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
        marginLeft: 40
    },
    tekMapPeta: {
        color: '#929292',
        marginTop: -16,
        marginLeft: 62,
        fontSize: 13
    },
    iconPlus: {
        marginTop: -22,
        marginLeft: 40
    },
    tekPlus: {
        color: '#929292',
        marginTop: -15,
        marginLeft: 62,
        fontSize: 13
    },
    kotakPlus: {
        marginTop: -82,
        marginLeft: 182
    },
    batas: {
        marginTop: 15,
        color: '#D9D9D9'
    },
});

export default styles;