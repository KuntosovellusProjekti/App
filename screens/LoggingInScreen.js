import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import loggingIn from "../assets/Icons/loggingIn.png";

const LoggingInScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.titleText}>Kirjaudutaan sisään...</Text>
      <Image source={loggingIn} style={styles.icon} />
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
    width: 100,
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

export default LoggingInScreen;
