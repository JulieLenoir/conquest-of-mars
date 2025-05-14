import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import MissionScreen from '../Screens/MissionScreen';
import SpaceScreen from '../Screens/SpaceScreen';
import TestDbScreen from '../Screens/testDbScreen';
import HomeTabsScreen from '../Screens/HomeTabsScreen';
import LaunchScreen from '../Screens/LaunchScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: '#1e0000' },
                headerTintColor: 'white',
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Mission"
                component={MissionScreen}
                options={{
                    title: 'Mission Mars',
                    headerbackTitle: 'Retour'
                }} />
            <Stack.Screen
                name="Launch"
                component={LaunchScreen}
                options={{
                    title: 'Lancement de la mission',
                    headerbackTitle: 'Retour'
                }} />
            <Stack.Screen
                name="Space"
                component={SpaceScreen}
                options={{
                    title: "Info sur Mars",
                    headerbackTitle: 'Retour'
                }} />
            {/* <Stack.Screen
                name="testDb"
                component={TestDbScreen}
                options={{
                    title: "Test persistance de données",
                    headerbackTitle: 'Retour'
                }} /> */}
            <Stack.Screen
                name="HomeTabs"
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


        </Stack.Navigator >
    );
};

export default AppNavigator;

