import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Navigation from "./components/Navigation/Navigation";
import { auth } from "./services/ApiService";
import { onAuthStateChanged } from "firebase/auth";
import ApiService from "./services/ApiService";
import { StyleSheet } from "react-native";
import { User } from "firebase/auth";
import { FIREBASE_AUTH } from "./services/ApiService";
import { HomeScreen } from "./screens";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Navigation />
        </>
      ) : (
        <AppNavigator />
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
