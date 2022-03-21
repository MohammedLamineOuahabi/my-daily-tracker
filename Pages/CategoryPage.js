import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';
export default function CategoryPage({ category, setCurrentCategory }) {
  const storeEvent = sub => {
    var n = new Date().toISOString();
    console.log(`${n} , category :${category.title} ,subCategory :${sub.title} ,`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.title} </Text>
      <View>
        {category.subCategories &&
          category.subCategories.map(sub => (
            <Button
              mode='contained'
              key={sub.id}
              onPress={() => storeEvent(sub)}
              style={styles.categoryBtn}
            >
              {sub.title}
            </Button>
          ))}
      </View>
      <View>
        <Button icon='plus' mode='contained' onPress={() => setCurrentCategory(null)}>
          history
        </Button>
        <Button icon='plus' mode='contained' onPress={() => setCurrentCategory(null)}>
          go back
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  categoryBtn: {
    marginTop: 5
  },
  text: {
    color: colors.primary,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 25
  }
});
