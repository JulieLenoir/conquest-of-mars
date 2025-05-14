import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text } from "react-native";
import HomeTabsScreen from '../Screens/HomeTabsScreen';
import EquipementTabsScreen from '../Screens/EquipementTabsScreen';
import ProfileTabsScreen from '../Screens/ProfileTabsScreen';
import MissionScreen from '../Screens/MissionScreen';


const Tab = createBottomTabNavigator();
// Fonction utilisée pour créer un navigateur par onglets (onglets de bas de page).
const Stack = createNativeStackNavigator();
// Fonction utilisée pour créer un navigateur basé sur une pile(stack navigation).

const MissionAtterrisageTabs = () => {
    // Ce composant combine les piles définies précédemment 
    // (HomeStack, EquipementStack, et ProfileStack) en un menu de navigation par onglets.
    return (
        // Définit un navigateur par onglets.
        <Tab.Navigator
            // screenOptions  : Définit des options globales pour tous les onglets 
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#1E0000',
                    borderColor: '#FF9999',
                },
                tabBarActiveTintColor: '#8B0000',
                tabBarInactiveTintColor: '#FF9999',
                // tabBarIcon : Associe des icônes aux onglets en fonction du nom de la route.
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'HomeAtterrissage') {
                        iconName = 'home';
                    } else if (route.name === 'Equipements') {
                        iconName = 'construct';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="HomeAtterrissage"
                component={HomeTabsScreen}

            />
            <Tab.Screen
                name="Equipements"
                component={EquipementTabsScreen} />
            <Tab.Screen
                name="Profile"
                component={ProfileTabsScreen} />
        </Tab.Navigator>
    );
};
export default MissionAtterrisageTabs;



