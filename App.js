// App.js
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./components/Navigation/Navigation";
import { firestore } from "./services/ApiService";
import { serverTimestamp } from "firebase/firestore";
import LoginScreen from "./screens/LoginScreen";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import Apiservice from "./services/ApiService";

export default function App() {
  const [logged, setLogged] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLogged(true);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View style={styles.container}>
      {logged ? (
        <>
          <Navigation />
          <StatusBar style="auto" />
        </>
      ) : (
        <LoginScreen onLogin={setLogged} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
