import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPrimary from '../Components/ButtonPrimary';



const ProfileTabsScreen = ({ navigation }) => {



    return (

        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#1E0000', '#3D0000', '#8B0000']}
                style={styles.background} >


                <View style={styles.blocImage}>
                    <Image source={require('../assets/img/equipe1.png')} style={styles.image} />
                </View>

                <View style={styles.title}>
                    <Text style={styles.title1}>
                        Cdr Luna
                    </Text>
                    <Text style={styles.title2}>
                        Commandant de mission
                    </Text>
                </View>
                <View style={styles.donnees}>
                    <View style={styles.boxDonnees} >
                        <Text style={styles.donnee1}>47</Text>
                        <Text style={styles.donnee2}>Missions</Text>
                    </View>
                    <View style={styles.boxDonnees} >
                        <Text style={styles.donnee1}>2300</Text>
                        <Text style={styles.donnee2}>Heures de Vol</Text>
                    </View>
                    <View style={styles.boxDonnees} >
                        <Text style={styles.donnee1}>8</Text>
                        <Text style={styles.donnee2}>Certifications</Text>
                    </View>
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
        alignItems: 'center',
    },
    blocImage: {
        width: '100%',
        height: 150,

        alignItems: 'center',
    },
    image: {
        borderRadius: 50,
        width: 100,
        height: 100,
        margin: 20

    },
    title: {
        width: '100%',
        height: '20%',
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

    },
    title2: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginTop: 20
    },
    donnees: {
        width: '100%',

        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: '10%',
    },
    boxDonnees: {
        width: 100,
        height: 100,
        backgroundColor: '#FF444410',
        borderRadius: 10,
        justifyContent: 'space-evenly',
    },
    donnee1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center',
    },
    donnee2: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginBottom: 10
    },



});
export default ProfileTabsScreen;