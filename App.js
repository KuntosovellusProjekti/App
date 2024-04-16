// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import SigningUpScreen from './screens/SigningUpScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <Navigation /> 
     {/* <SignUpScreen /> */}
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