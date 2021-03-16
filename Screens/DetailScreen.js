import React from 'react';
import { Text, View, Button } from 'react-native';

import { useDispatch } from 'react-redux'
import { addnote, deletenote } from '../redux/actions/notesActions'

export default function DetailsScreen({ route, navigation }) {
  const dispatch = useDispatch()
  const { id } = route.params;
  
  const addNote = note => dispatch(addnote(note))
  const deleteNote = id => dispatch(deletenote(id))
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen: { id }</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Add note" onPress={() => addNote({ note: 'pepe' })} />
    </View>
  );
}
