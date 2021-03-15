import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        hidden={false} 
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={ HomeScreen }
            options={{
              headerTitle: 'Home',
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#f4511e',
    tintColor: '#000', 
    fontWeight: 'bold'
  },
});
