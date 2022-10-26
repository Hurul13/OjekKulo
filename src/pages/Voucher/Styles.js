import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        height: windowHeight * 0.34
    },
    judul: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: -16,
        fontWeight: 'bold'
    },
    iconpanah: {
        marginBottom: 0,
        marginTop: 30,
        marginLeft: 28,
    },
    searchVoucher: {
        marginTop: 20
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
        marginLeft: 43
    },
    teksVoucher: {
        color: '#929292',
        marginTop: -19,
        marginLeft: 78
    },
    iconArrowKanan: {
        marginTop: -16,
        marginLeft: 315
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
        width: 320
    },
    judulSatu: {
        color: 'black',
        marginTop: 395,
        marginLeft: -260,
        fontSize: 18,
        fontWeight: 'bold'
    },
    judulDua: {
        color: 'black',
        marginTop: 6,
        marginTop: 420,
        marginLeft: -210,
        fontSize: 14,
    },
});

export default styles;
