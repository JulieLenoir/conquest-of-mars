import React from 'react';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, RefreshControl, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPrimary from '../Components/ButtonPrimary';


const EquipementTabsScreen = ({ navigation }) => {

    const dataExploration =
        [
            {
                id: '1', title: 'Combinaison spatial', statut: "Opérationnel"
            },
            {
                id: '2', title: "Véhicules d'exploration", statut: "En Maintenance"
            },
            {
                id: '3', title: "Générateurs d'oxygène", statut: "Opérationnel"
            },
        ];
    const isEnMaintenance = dataExploration.statut === 'en Maintenance';
    const [isActive, setIsActive] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    return (

        <LinearGradient
            colors={['#1E0000', '#3D0000', '#8B0000']}
            style={styles.background} >


            <SafeAreaView style={styles.container}>

                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    } >
                    <View style={styles.module}>
                        <Text style={styles.module1}>Équipement</Text>

                        <FlatList

                            data={dataExploration}


                            renderItem={({ item }) =>


                                <View style={styles.flatlist}>


                                    <View style={styles.flatlist1}>
                                        <Text style={styles.titleFlatlist}>{item.title}</Text>
                                        <Text style={[styles.descriptionFlatlist, { color: item.statut === 'Opérationnel' ? '#FF9999' : '#fff656' }]}>{item.statut}</Text>
                                    </View>

                                </View>
                            }

                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                        />
                    </View>



                </ScrollView >


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
    module: {
        flex: 1,
        width: '100%',
        margin: 10
    },
    module1: {
        width: '100%',
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
        width: '95%',
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

});
export default EquipementTabsScreen;