import React from 'react';
import { Text, View, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen: { id }</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
