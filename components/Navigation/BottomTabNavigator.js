import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  CalendarScreen,
  AddWorkoutScreen,
  MapScreen,
  ProfileScreen,
  SettingsScreen,
} from "../../screens";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#ffffff",
  },
};

const BottomTabNavigator = ({ navigation }) => { // Accept navigation prop
  const currentRouteName = navigation ? navigation.getCurrentRoute()?.name : null;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          height: 60,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          paddingHorizontal: 20,
        }}
      >
        <Text>{currentRouteName}</Text>
      </View>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ /* Your options here */ }}
        />
        <Tab.Screen
          name="Add Workout"
          component={AddWorkoutScreen}
          options={{ /* Your options here */ }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ /* Your options here */ }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ /* Your options here */ }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ /* Your options here */ }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
