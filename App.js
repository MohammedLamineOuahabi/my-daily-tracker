import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import Comp from './components/Comp';
import { colors } from './utils/colors';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Comp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//  SafeAreaView not work in android
