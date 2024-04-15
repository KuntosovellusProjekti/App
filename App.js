// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import SigningUpScreen from './screens/SigningUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigation /> */}
      <SigningUpScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
