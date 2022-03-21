import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import CategoriesPage from './Pages/CategoriesPage';
import CategoryPage from './Pages/CategoryPage';
import { colors } from './Constants/colors';
import initCategories from './Constants/categories';

export default function App() {
  const [categories, setCategories] = React.useState(initCategories);
  const [currentCategory, setCurrentCategory] = React.useState();

  //  add a category to the list
  const addCategory = newCategory => {
    if (!categories.includes(newCategory)) {
      setCategories(categoriesList => [...categoriesList, { title: newCategory }]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {!currentCategory ? (
        <CategoriesPage
          addCategory={addCategory}
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />
      ) : (
        <CategoryPage category={currentCategory} setCurrentCategory={setCurrentCategory} />
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
