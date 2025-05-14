import React from 'react';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, RefreshControl, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPrimary from '../Components/ButtonPrimary';


const MissionScreen = ({ navigation }) => {

    const dataMission =
        [{ id: '1', title: 'Préparation', description: "Formation de l'équipage et tests", duration: '6 mois' },
        { id: '2', title: 'Lancement', description: "Décollage depuis la Terre", duration: '1 jour', link: 'Launch' },
        { id: '3', title: 'Transit', description: "Voyage vers Mars", duration: '7 mois' },
        { id: '4', title: 'Atterrissage', description: "Installation sur Mars", duration: '1 mois', link: 'HomeTabs' },
        { id: '5', title: 'Colonisation', description: "Établissement de la base", duration: '24 mois' }
        ];
    const dataEquipe =
        [
            { id: '1', name: 'Cdr. Luna', role: 'Commandant', ressource: 'leadership', picture: require('../assets/img/equipe1.png') },
            {
                id: '2', name: 'Dr Marcus Webb', role: 'Ingénieur', ressource: 'Système', picture: require('../assets/img/equipe2.png')
            },
            { id: '3', name: 'Dr. Artemis', role: 'Biologiste', ressource: 'Agriculture', picture: require('../assets/img/equipe3.png') },
        ];

    const [isActive, setIsActive] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const home = () => {
        navigation.navigate('Home', {});
    }



    return (

        <LinearGradient
            colors={['#1E0000', '#3D0000', '#8B0000']}
            style={styles.background} >


            <SafeAreaView style={styles.container}>



                <View style={styles.view}>
                    <View style={styles.title}>
                        <Text style={styles.title1}>
                            OPÉRATION MARS
                        </Text>
                        <Text style={styles.title2}>
                            Plan de colonisation 2030
                        </Text>
                    </View>

                    <View style={styles.donnees}>
                        <View style={styles.boxDonnees} >
                            <Text style={styles.donnee1}>780</Text>
                            <Text style={styles.donnee2}>JOURS</Text>
                        </View>
                        <View style={styles.boxDonnees} >
                            <Text style={styles.donnee1}>12</Text>
                            <Text style={styles.donnee2}>MEMBRES</Text>
                        </View>
                        <View style={styles.boxDonnees} >
                            <Text style={styles.donnee1}>4</Text>
                            <Text style={styles.donnee2}>MODULES</Text>
                        </View>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                        refreshControl={
                            < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        } >
                        <View style={styles.module}>
                            <Text style={styles.module1}>CHRONOLOGIE DE LA MISSION</Text>

                            <FlatList

                                data={dataMission}


                                renderItem={({ item }) =>

                                    <TouchableOpacity
                                        onPress={() => {
                                            if (item.title === 'Atterrissage') {
                                                navigation.navigate('HomeTabs');
                                            } else if (item.title === 'Lancement') {
                                                navigation.navigate('Launch');
                                            }
                                        }}
                                    >


                                        <View style={styles.flatlist}>
                                            <View style={styles.circleFlatlist}> <Text style={styles.circle}></Text>
                                            </View>

                                            <View style={styles.flatlist1}>
                                                <Text style={styles.titleFlatlist}>{item.title}</Text>
                                                <Text style={styles.descriptionFlatlist}>{item.description}</Text>
                                                <Text style={styles.durationFlatlist}>{item.duration}</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                }

                                keyExtractor={(item) => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                        <View style={styles.moduleEquipe}>
                            <Text style={styles.module1}>ÉQUIPE D'ÉLITE</Text>
                            <FlatList
                                data={dataEquipe}


                                renderItem={({ item }) =>
                                    <View style={styles.flatlistEquipe}>
                                        <View style={styles.imgEquipe}>
                                            <Image source={item.picture} style={styles.pictures} />
                                        </View>
                                        <View >
                                            <Text style={styles.titleFlatlist}>{item.name}</Text>
                                            <Text style={styles.descriptionFlatlist}>{item.role}</Text>
                                            <Text style={styles.ressourceFlatlist}>{item.ressource}</Text>
                                        </View>
                                    </View>
                                }

                                keyExtractor={(item) => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                        <View style={styles.button}>
                            <ButtonPrimary title="RETOUR À L'ACCUEIL " onPress={home} />


                        </View>

                    </ScrollView >
                </View>

            </SafeAreaView >

        </LinearGradient >


    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    background: {
        flex: 1,
        justifyContent: 'space-between',

    },
    view: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    title: {
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
        marginTop: 30
    },
    title2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginTop: 20
    },
    donnees: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: '10%',
        marginBottom: 20
    },
    boxDonnees: {
        width: 70,
        height: 70,
        backgroundColor: '#FF444410',
        borderRadius: 10,
    },
    donnee1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center',
        marginTop: 10
    },
    donnee2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FF9999',
        textAlign: 'center',
        marginBottom: 10
    },
    module: {
        flex: 1,

    },
    module1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(255, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'left',
        margin: 10
    },
    flatlist: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        margin: 8,
    },
    flatlist1: {
        width: '89%',
        padding: 10,
        backgroundColor: '#FF444410',
        borderRadius: 10
    },
    circleFlatlist: {
        width: '10%',

    },
    circle: {
        width: 10,
        height: 10,
        margin: 5,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderRadius: 10
    },
    titleFlatlist: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 5
    },
    descriptionFlatlist: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FF9999',
        margin: 5
    },
    durationFlatlist: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffff',
        margin: 10
    },
    moduleEquipe: {
        flex: 1,
        margin: 10,
    },
    pictures: {
        width: 50,
        height: 50,
        margin: 20,
        borderRadius: 50
    },
    flatlistEquipe: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        width: '95%',
        height: '100%',
        padding: 5,
        backgroundColor: '#FF444410',
        borderRadius: 10
    },

    ressourceFlatlist: {
        width: 55,
        fontSize: 8,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        padding: 4,
        color: 'white',
        borderRadius: 10,
        textAlign: 'center',
        margin: 5
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'white'
    }

});
export default MissionScreen;