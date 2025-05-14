import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPrimary from '../Components/ButtonPrimary';



const HomeTabsScreen = ({ navigation }) => {
    const goToProfile = () => {
        navigation.navigate('ProfileTabs');
    };

    const goToEquipments = () => {
        navigation.navigate('EquipementsTabs');
    };
    return (

        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#1E0000', '#3D0000', '#8B0000']}
                style={styles.background} >


                <View style={styles.title}>
                    <Text style={styles.title1}>
                        Base Mars Alpha
                    </Text>
                    <Text style={styles.title2}>
                        Statut Opérationnel
                    </Text>
                </View>

                <View style={styles.infosBase}>
                    <Text style={styles.infoBase}>Température : - 63 °C</Text>
                    <Text style={styles.infoBase}>Pression : 600 Pa</Text>
                    <Text style={styles.infoBase}>Oxygène : 98 %</Text>
                </View>



            </LinearGradient >
        </SafeAreaView >

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'black'
    },
    background: {
        flex: 1,
        alignContent: 'center'

    },
    title: {
        height: 200,
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
    infosBase: {
        height: 150,
        width: '95%',
        justifyContent: 'flex-start',
        borderRadius: 10,
        backgroundColor: '#FF444410',


    },
    infoBase: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20
    }
});
export default HomeTabsScreen;