import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Modal from "react-native-modal"
import React, { useState } from 'react'
import { IconDate, IconTime, IconX, IconJamGray, IconDateGray } from '../../assets'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import styles from './Styles'


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
                        
                        <IconDateGray style={styles.iconDateTime(pilihTanggal)} fill={pilihTanggal ? '#000' : '#CECECE'} />
                        <Text style={styles.textDateTime(pilihTanggal)}>{pilihTanggal ? date.toLocaleDateString() : 'Pilih Tanggal'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.line2}>__________________</Text>
                    <TouchableOpacity style={styles.date} onPress={showTimepicker}>
                        <IconJamGray style={styles.iconDateTime(pilihWaktu)} fill={pilihWaktu ? '#000' : '#CECECE'} />
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

