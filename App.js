// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigation />
      <StatusBar style="auto" /> */}
< SignUpScreen />
{/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
