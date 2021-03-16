import React from 'react';
import { Text, View, Button } from 'react-native';

import { useSelector } from 'react-redux'

export default function HomeScreen({ navigation }) {
  const { notes } = useSelector(state => state)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{ notes.length }</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.push('Details', {
            id: 1000
          });
        }}
      />      
    </View>
  );
}
