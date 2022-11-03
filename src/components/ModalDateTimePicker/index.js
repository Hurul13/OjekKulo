import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Modal from "react-native-modal"
import React, { useState } from 'react'
import { IconDate, IconTime, IconX } from '../../assets'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const ModalDateTimePicker = ({ isActive = true, onClose }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState(null);
    const [pilihTanggal, setPilihTanggal] = useState(false);
    const [pilihWaktu, setPilihWaktu] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setPilihWaktu(true);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setTime(currentDate);
        setPilihTanggal(true);
    };

    const showMode = (currentMode) => {

        if (currentMode === 'date') {
            DateTimePickerAndroid.open({
                value: date,
                onChange: onChangeDate,
                mode: currentMode,
                is24Hour: true,
            });
        } else {
            DateTimePickerAndroid.open({
                value: time ?? '',
                onChange,
                mode: currentMode,
                is24Hour: true,
            });
        }
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        if (pilihTanggal == true) {
            showMode('time');
        } else {
            Alert.alert('Peringatan', 'Harap pilih tanggal');
        }
    };

    const onCloseModal = () => {
        onClose(false);
    }

    return (
        <View style={styles.page}>
            <Modal isVisible={isActive}>
                <View style={styles.box}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onCloseModal}>
                            <IconX style={styles.iconX} />
                        </TouchableOpacity>
                        <Text style={styles.judul}>Jadwalkan Perjalanan!</Text>
                    </View>
                    <Text style={styles.line}>___________________</Text>
                    <TouchableOpacity style={styles.date} onPress={showDatepicker}>
                        
                        <IconDate style={styles.iconDateTime(pilihTanggal)} fill={pilihTanggal ? '#000' : '#CECECE'} />
                        <Text style={styles.textDateTime(pilihTanggal)}>{pilihTanggal ? date.toLocaleDateString() : 'Pilih Tanggal'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.line2}>__________________</Text>
                    <TouchableOpacity style={styles.date} onPress={showTimepicker}>
                        <IconTime style={styles.iconDateTime(pilihWaktu)} fill={pilihWaktu ? '#000' : '#CECECE'} />
                        <Text style={styles.textDateTime(pilihWaktu)}>{pilihWaktu ? date.toLocaleTimeString() : 'Pilih Waktu'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.line2}>___________________</Text>
                    <Text style={styles.text}>Tanggal dan waktu akan mengiikuti zona waktu tempat penjemputanmu.</Text>
                    <View style={styles.button(pilihTanggal && pilihWaktu)}>
                        <Text style={styles.textButton}>Jadwalkan</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalDateTimePicker;

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
});