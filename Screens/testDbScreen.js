import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';



const MissionApp = () => {
    const [data, setData] = useState([]);



    // Rendu de chaque élément de la liste
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.duration}>Durée : {item.duration}</Text>
            {item.link && <Text style={styles.link}>Lien : {item.link}</Text>}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    duration: {
        marginTop: 5,
        fontStyle: 'italic',
        color: '#555',
    },
    link: {
        marginTop: 5,
        color: '#1e90ff',
        textDecorationLine: 'underline',
    },
});

export default MissionApp;
