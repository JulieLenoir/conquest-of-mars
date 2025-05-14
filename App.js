import React, { useEffect } from 'react';
import { Text, View, NavigationContainer, AppNavigator } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  useEffect(() => {
    try {
      const db = SQLite.openDatabaseAsync('test.db');
      console.log('Base de données ouverte:', db);
    } catch (error) {
      console.error('Erreur SQLite:', error);
    }
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}



