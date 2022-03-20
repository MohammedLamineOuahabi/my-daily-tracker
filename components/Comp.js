import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
export default function Comp1() {
  const [text, setText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>label</Text>
      <Button icon='camera' mode='contained' onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <TextInput label='Email' value={text} onChangeText={text => setText(text)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10
  },
  text: {
    color: colors.primary
  },
  textInput: {
    backgroundColor: colors.textInput,
    padding: 0,
    height: 2
  }
});
