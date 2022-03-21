import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';
export default function CategoriesPage({ addCategory, categories, setCurrentCategory }) {
  const [categoryName, setCategoryName] = React.useState('Useful text');

  return (
    <View style={styles.container}>
      <Text>new category to track</Text>
      <TextInput value={categoryName} onChangeText={setCategoryName} />
      <Button icon='plus' mode='contained' onPress={() => addCategory(categoryName)}>
        add
      </Button>
      {categories.length > 0 &&
        categories.map(cat => (
          <Button
            mode='contained'
            key={cat.id}
            onPress={() => setCurrentCategory(cat)}
            style={styles.categoryBtn}
          >
            {cat.title}
          </Button>
        ))}
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
  }
});
