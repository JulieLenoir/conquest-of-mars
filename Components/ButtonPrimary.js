import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonPrimary = ({ title, onPress, type = 'primary' }) => {
    const isSecondary = type === 'secondary';

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isSecondary && styles.secondaryButton,

            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.text,
                    isSecondary && styles.secondaryText,

                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        marginTop: 30,
        padding: 15,
        width: '90%',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        backgroundColor: '#FF4444'
    },
    secondaryButton: {
        marginTop: 30,
        padding: 15,
        width: '90%',
        borderWidth: 1,
        borderColor: '#FF4444',
        borderRadius: 30,
        backgroundColor: '#FF444410',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    secondaryText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});

export default ButtonPrimary;
