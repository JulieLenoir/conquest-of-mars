
const HomeStack = ({ navigation }) => (
    // Définit un Stack Navigator spécifique à la section "Home".
    <Stack.Navigator>
        {/* Stack.Screen : Définit un écran dans la pile */}
        <Stack.Screen
            // Identifiant unique pour cet écran dans la navigation.
            name="HomeAterrissage"
            // Composant à afficher lorsque cet écran est sélectionné.
            component={HomeTabsScreen}
            options={{
                // Définit le style du fond de l'en-tête.
                headerStyle: { backgroundColor: '#1E0000' },

                headerLeft: () => (
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Base Mars
                    </Text>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Entypo name="log-out" size={24} color="white" />
                    </TouchableOpacity>
                ),
            }}
        />
    </Stack.Navigator>
);

const EquipementStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="EquipementsDetail"
            component={EquipementTabsScreen}
            options={{
                headerStyle: { backgroundColor: '#1E0000' },

                headerLeft: () => (
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Base Mars
                    </Text>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Entypo name="log-out" size={24} color="white" />
                    </TouchableOpacity>
                ),
            }}
        />
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (

    <Stack.Navigator>
        <Stack.Screen
            name="ProfileDetails"
            component={ProfileTabsScreen}
            options={{
                headerStyle: { backgroundColor: '#1E0000' },

                headerLeft: () => (
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Base Mars
                    </Text>
                ),

                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Entypo name="log-out" size={24} color="white" />
                    </TouchableOpacity>
                ),

            }}
        />
    </Stack.Navigator >
);
