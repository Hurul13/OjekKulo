import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    kotakAlamat: {
        backgroundColor: '#ffff',
        marginTop: 33,
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
        marginLeft: 38
    },
    tekLokasibiru: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 70
    },
    garisLokasi: {
        marginTop: -7,
        marginLeft: 70,
        color: '#D9D9D9',
    },
    lokasiOren: {
        marginTop: 1,
        marginLeft: 38
    },
    tekLokasiOren: {
        color: '#929292',
        marginTop: -18,
        marginLeft: 70
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
        marginLeft: 34
    },
    tekPlus: {
        color: '#929292',
        marginTop: -15,
        marginLeft: 53,
        fontSize: 13
    },
    kotakPlus: {
        marginTop: -100,
        marginLeft: 190
    },
    iconBackBulat: {
        marginTop: 255,
        marginLeft: 28
    },
    kotakLokasi: {
        backgroundColor: '#ffff',
        marginTop: 12,
        //marginLeft: 28,
        height: 350,
        width: 358,
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
    iconLine: {
        marginTop: 10,
        marginLeft: 160
    },
    teksPertama: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 28
    },
    teksKedua: {
        color: 'black',
        fontSize: 12,
        marginTop: 1,
        marginLeft: 28
    },
    batasSatu: {
        marginTop: -69,
        marginLeft: 12
    },
    kotakFavorit: {
        backgroundColor: '#ECEFF5',
        marginTop: 13,
        //marginLeft: 28,
        height: 65,
        width: 362,
        //borderRadius: 0,
        // borderWidth: 1,
        // borderColor: '#D9D9D9',
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
    iconMotor: {
        marginLeft: 22,
        marginTop: 20
    },
    teksJudul: {
        color: 'black',
        marginLeft: 69,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 15
    },
    teksSatu: {
        color: 'black',
        marginLeft: 69,
        marginTop: 1,
        fontSize: 10,
    },
    teksDua: {
        color: 'black',
        marginLeft: 115,
        marginTop: -27,
        fontSize: 26,
    },
    iconUser: {
        marginLeft: 125,
        marginTop: -13,
    },
    teksTiga: {
        color: 'black',
        marginLeft: 137,
        marginTop: -11,
        fontSize: 10,
    },
    teksEmpat: {
        color: 'black',
        marginLeft: 260,
        marginTop: -25,
        fontSize: 15,
        fontWeight: 'bold',
    },
    garisSatu: {
        marginTop: 9,
        marginLeft: 68,
        //height: 220,
        //width: 200,
        color: '#D9D9D9',
    },
    batasDua: {
        marginTop: 7,
        marginLeft: 12
    },
    iconMobil: {
        marginLeft: 22,
        marginTop: 20
    },
    teksMobilJudul: {
        color: 'black',
        marginLeft: 69,
        marginTop: -30,
        fontWeight: 'bold',
        fontSize: 15
    },
    teksMobilSatu: {
        color: 'black',
        marginLeft: 69,
        marginTop: 1,
        fontSize: 10,
    },
    teksMobilDua: {
        color: 'black',
        marginLeft: 115,
        marginTop: -27,
        fontSize: 26,
    },
    iconUser: {
        marginLeft: 125,
        marginTop: -13,
    },
    teksMobilTiga: {
        color: 'black',
        marginLeft: 137,
        marginTop: -11,
        fontSize: 10,
    },
    teksMobilEmpat: {
        color: 'black',
        marginLeft: 255,
        marginTop: -25,
        fontSize: 15,
        fontWeight: 'bold',
    },
    kotakBgBottom: {
        backgroundColor: '#ffff',
        marginTop: 10,
        //marginLeft: 28,
        height: 350,
        width: 358,
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
    bottom: {
        marginTop: 40
    },
    kotakBottom: {
        backgroundColor: '#598FF9',
        marginTop: 25,
        marginLeft: 80,
        height: 43,
        width: 250,
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
    tekBottomSatu: {
        color: '#ffff',
        marginTop: -33,
        marginLeft: 100,
        fontSize: 16,
        fontWeight: 'bold',

    },
    tekBottomDua: {
        color: '#ffff',
        marginTop: -18,
        marginLeft: 220,
        fontSize: 16
    },
    iconTime: {
        marginTop: -30,
        marginLeft: 28
    },
    iconBackBulatKanan: {
        marginTop: -19,
        marginLeft: 291
    },
    iconMoreBulatKotak: {
        marginTop: -85,
        marginLeft: 300
    },
    kotakIconVoucher: {
        //backgroundColor: '#E7E7E7',
        marginTop: -85,
        marginLeft: 227,
        height: 25,
        width: 63,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //elevation: 9,
    },
    teksVoucher: {
        color: '#929292',
        marginTop: 1,
        marginLeft: 5,
        fontSize: 16
    },
    iconUang: {
        marginLeft: 28,
        marginTop: -77,
    },
    teksKetiga: {
        marginLeft: 52,
        marginTop: -19,
        color: 'black',
        fontSize: 14
    },
    iconPanahKanan: {
        marginTop: -13,
        marginLeft: 90
    },

    // // versi fara

    // boxModal: {
    //     backgroundColor: '#fff',
    //     height: windowWidth * .7,
    //     borderRadius: 18,
    //     marginTop: 450,
    // },
    // headerModal: {
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    // },
    // iconXModal: {
    //     marginTop: 10,
    // },
    // judulModal: {
    //     color: '#000',
    //     fontWeight: 'bold',
    //     fontSize: 16,
    //     marginLeft: 35,
    //     marginTop: -19,
    // },
    // lineModal: {
    //     marginTop: -8,
    //     color: '#DBDBDB',
    // },
    // dateModal: {
    //     paddingVertical: 15,
    //     paddingHorizontal: 25,
    //     flexDirection: 'row',
    // },
    // iconDateTimeModal: (isActive) => ({
    //     marginTop: -3,
    //     marginLeft: 10,
    // }),
    // textDateTimeModal: (isActive) => ({
    //     color: isActive ? '#000' : '#CECECE',
    //     fontSize: 14,
    //     marginLeft: 15,
    // }),
    // line2Modal: {
    //     marginTop: -12,
    //     color: '#CECECE',
    //     textAlign: 'right',
    // },
    // textModal: {
    //     textAlign: 'center',
    //     color: '#000',
    //     fontSize: 10,
    //     marginTop: 10,
    // },
    // buttonModal: (formAlreadyFilled) => ({
    //     backgroundColor: formAlreadyFilled ? '#598FF9' : '#929292',
    //     width: windowWidth * .8,
    //     height: windowWidth * .1,
    //     borderRadius: 12,
    //     marginTop: 13,
    //     marginLeft: 18,
    // }),
    // textButtonModal: {
    //     color: '#fff',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     marginTop: 8,
    // },

    // versi aik

    // // buat modal jam

    kotakModal1: {
        //flex: 1,
        backgroundColor: "#ffff",
        marginTop: 430,
        marginRight: 0,
        height: 265,
        borderRadius: 10,
    },
    iconX: {
        marginLeft: 20,
        marginTop: 20
    },
    textModal1: {
        color: '#000',
        marginTop : -17.5,
        marginLeft: 58,
        fontSize: 17,
        fontWeight: 'bold',
    },
    line: {
        color: '#DBDBDB',
        marginTop: 5
    },
    iconDateGray: {
        marginLeft: 20,
        marginTop: 13,
    },
    textModal2: {
        color: '#DBDBDB',
        marginTop : -19,
        marginLeft: 58,
        fontSize: 14,
        //fontWeight: 'bold',
    },
    line1: {
        color: '#DBDBDB',
        marginTop: 5,
        marginLeft: 20
    },
    iconJamGray: {
        marginLeft: 20,
        marginTop: 13
    },
    textModal3: {
        color: '#DBDBDB',
        marginTop : -21,
        marginLeft: 58,
        fontSize: 14,
        //fontWeight: 'bold',
    },
    textModal4: {
        color: '#000',
        marginTop : 6,
        marginLeft: 28,
        fontSize: 9,
        //fontWeight: 'bold',
    },
    button: (formAlreadyFilled) => ({
        backgroundColor: formAlreadyFilled ? '#598FF9' : '#929292',
        width: windowWidth * .8,
        height: windowWidth * .1,
        borderRadius: 100,
        marginTop: 22,
        marginLeft: 18
    }),
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },

    // Buat peta
    // kotakGede: {
    //     backgroundColor: '#929292',
    //    // marginTop: 25,
    //     //marginLeft: 80,
    //     height: 700,
    //     width: 400,
    //     borderRadius: 0,
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.29,
    //     shadowRadius: 4.65,
    //     //elevation: 7,
    //     flexDirection: 'row',
    // }
})

export default styles;