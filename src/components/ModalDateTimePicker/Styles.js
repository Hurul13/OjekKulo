import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    box: {
        backgroundColor: '#fff',
        height: windowWidth * .7,
        borderRadius: 18,
        marginTop: 450,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    iconX: {
        marginTop: 10,
    },
    judul: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 35,
        marginTop: -19,
    },
    line: {
        marginTop: -8,
        color: '#DBDBDB',
    },
    date: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    iconDateTime: (isActive) => ({
        marginTop: -3,
        marginLeft: 10,
    }),
    textDateTime: (isActive) => ({
        color: isActive ? '#000' : '#CECECE',
        fontSize: 14,
        marginLeft: 15,
    }),
    line2: {
        marginTop: -12,
        color: '#CECECE',
        textAlign: 'right',
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 10,
        marginTop: 10,
    },
    button: (formAlreadyFilled) => ({
        backgroundColor: formAlreadyFilled ? '#598FF9' : '#929292',
        width: windowWidth * .8,
        height: windowWidth * .1,
        borderRadius: 12,
        marginTop: 13,
        marginLeft: 18,
    }),
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
})

export default styles;
