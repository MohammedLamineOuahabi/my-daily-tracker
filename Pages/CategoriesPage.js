import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';
export default function CategoriesPage({ addCategory, categories, setSelectCat }) {
  const [categoryName, setCategoryName] = React.useState('Useful text');

  return (
    <View style={styles.container}>
      <TextInput
        label='new category to track'
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <Button icon='plus' mode='contained' onPress={() => addCategory(categoryName)}>
        add
      </Button>
      {categories.length > 0 &&
        categories.map((cat, i) => (
          <Button
            mode='contained'
            key={i}
            onPress={() => setSelectCat(cat)}
            style={styles.categoryBtn}
          >
            {cat}
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
