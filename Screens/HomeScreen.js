import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPrimary from '../Components/ButtonPrimary';
import TestDbScreen from './testDbScreen';



const HomeScreen = ({ navigation }) => {

    const stackMission = () => {
        navigation.navigate('Mission', {});
    }
    const spaceInfo = () => {
        navigation.navigate('Space', {});
    }
    const testDbScreen = () => {
        navigation.navigate('testDb', {});
    }
    return (

        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#1E0000', '#3D0000', '#8B0000']}
                style={styles.background} >


                <View style={styles.title}>
                    <Text style={styles.title1}>
                        MARS CONQUEST
                    </Text>
                    <Text style={styles.title2}>
                        La nouvelle frontière
                    </Text>
                </View>

                <View style={styles.button}>
                    <ButtonPrimary title="COMMENCER L'AVENTURE" onPress={stackMission} />
                    <ButtonPrimary title="Découvrez Mars" onPress={spaceInfo} type='secondary' />
                    <ButtonPrimary title="Test sql Lite" onPress={testDbScreen} type='secondary' />

                </View>


            </LinearGradient >
        </SafeAreaView >

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        flex: 1,
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center',
        marginTop: 100
    },
    title2: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'white'
    },
    button1: {

        textAlign: 'center',
        marginTop: 30,
        padding: 15,
        width: '90%',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        backgroundColor: '#FF4444'
    },
    textButton1: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    button2: {
        marginTop: 30,
        padding: 15,
        width: '90%',
        borderWidth: 1,
        borderColor: '#FF4444',
        borderRadius: 30,
        backgroundColor: '#FF444410',
    },
    textButton2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }

});
export default HomeScreen;