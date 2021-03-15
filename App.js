import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen }
          options={{
            headerTitle: '_Home_',
            headerStyle: {
              backgroundColor: styles.header.backgroundColor,
            },
            headerTintColor: styles.header.tintColor,
            headerTitleStyle: {
              fontWeight: styles.header.fontWeight,
            },
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={ DetailScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f4511e',
    tintColor: '#000', 
    fontWeight: 'bold'
  },
});
