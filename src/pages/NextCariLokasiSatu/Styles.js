import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        marginTop: 450,
    },
    back: {
        marginLeft: 25,
    },
    footer: {
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowWidth * .85,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 8,
        resizeMode: 'cover',
        paddingHorizontal: 30,
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
    },
    judul: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 25,
        paddingHorizontal: 1,
    },
    iconmapssearch: {
        marginTop: 28,
        marginLeft: 170,
    },
    address: {
        flexDirection: 'row'
    },
    iconmapblue: {
        marginTop: 20,
        marginLeft: 10,
    },
    textaddresstop: {
        marginTop: 15,
        fontWeight: 'bold',
        marginLeft: 13,
        color: '#000'
    },
    textaddressbottom: {
        marginLeft: 38,
        marginTop: 5,
        fontSize: 11,
        color: '#929292',
    },
    textaddressbottom1: {
        marginLeft: 38,
        fontSize: 11,
        color: '#929292'
    },
    save: {
        flexDirection: 'row',
        marginTop: 15,
    },
    iconsave: {
        marginLeft: 10,
    },
    textsavetop: {
        color: '#000',
        marginLeft: 16,
    },
    textsavebottom: {
        color: '#929292',
        marginLeft: 37,
        marginTop: 3,
    },
    line: {
        color: '#B3B3B3',
        marginTop: -10,
        marginLeft: 37
    },
    button: {
        backgroundColor: '#929292',
        width: windowWidth * .9,
        height: windowWidth * .1,
        borderRadius: 100,
        marginTop: 22,
        marginLeft: -10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
});

export default styles;