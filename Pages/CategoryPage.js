import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';
export default function CategoryPage({ category, setSelectCat }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category} </Text>
      <Button icon='plus' mode='contained' onPress={() => setSelectCat(null)}>
        go back
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.primary
  },
  categoryBtn: {
    marginTop: 5
  },
  text: { color: 'red' }
});
