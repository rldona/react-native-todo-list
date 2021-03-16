import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as StoreProvider } from 'react-redux'
import configureStore from './redux/store/configureStore'

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        hidden={false} 
      />
      <StoreProvider store={configureStore()}>
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
      </StoreProvider>
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
