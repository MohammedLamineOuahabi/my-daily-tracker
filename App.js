import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import CategoriesPage from './Pages/CategoriesPage';
import CategoryPage from './Pages/CategoryPage';
import { colors } from './Constants/colors';
import { basicCategories } from './Constants/categories';

export default function App() {
  const [categories, setCategories] = React.useState(basicCategories);
  const [selectedCat, setSelectCat] = React.useState();
  const addCategory = newCategory => {
    if (!categories.includes(newCategory)) {
      setCategories(categoriesList => [...categoriesList, newCategory]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {!selectedCat ? (
        <CategoriesPage
          addCategory={addCategory}
          categories={categories}
          setSelectCat={setSelectCat}
        />
      ) : (
        <CategoryPage setSelectCat={setSelectCat} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.bg
  }
});

//  SafeAreaView not work in android
