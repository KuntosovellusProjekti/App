import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import signingIn from "../assets/Icons/signingIn.png";

const SigningUpScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.titleText}>Luodaan käyttäjää...</Text>
      <Image source={signingIn} style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    width: 128,
    height: 100,
    marginBottom: 10,
    marginTop: 35,
  },

  titleText: {
    fontSize: 30,
    marginBottom: 24,
    color: "#0077b6",
    textAlign: 'center',
  },
});

export default SigningUpScreen;
