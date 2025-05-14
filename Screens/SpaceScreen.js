import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SpaceScreen = () => {
    const [planets, setPlanets] = useState([]);

    const getPlanets = async () => {
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/planets?name=Mars', {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'WWJE1Wgr2p2joEoFiYlCTw==u1gzpZzaK77d3mqA',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setPlanets(data); // Assurez-vous que la structure correspond
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPlanets();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#1E0000', '#3D0000', '#8B0000']} style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.title1}>ÉTAT DES LIEUX</Text>
                    <Text style={styles.title2}>Mars - Nouvelle frontière</Text>
                </View>
                <View style={styles.planets}>
                    {planets.map((planet, index) => (
                        <View key={index} style={styles.planets}>
                            <Text style={styles.planet}> {planet.name}</Text>

                            <Text style={styles.planet}>{planet.temperature} K</Text>
                            <Text style={styles.planet}>{planet.mass}</Text>
                            <Text style={styles.planet}>{planet.distance_light_year}</Text>
                            <Text style={styles.planet}>{planet.min_temperature}</Text>
                            <Text style={styles.planet}>{planet.max_temperature}</Text>


                        </View>

                    ))}
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '30%',
    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center',
        marginTop: 50
    },
    title2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginTop: 20
    },
    planets: {
        height: '30%',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FF444410',


    },
    planet: {
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
export default SpaceScreen;