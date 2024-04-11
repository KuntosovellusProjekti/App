import React from "react";
import { Text, View, Image } from "react-native"; // Import Image from react-native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  CalendarScreen,
  AddWorkoutScreen,
  MapScreen,
  ProfileScreen,
} from "../../screens";

// Import your icons
import BlueAddIcon from "../../assets/Icons/BlueAdd.png";
import BlueCalendarIcon from "../../assets/Icons/BlueCalendar.png";
import BlueHomeIcon from "../../assets/Icons/BlueHome.png";
import BlueMapIcon from "../../assets/Icons/BlueMap.png";
import BlueProfileIcon from "../../assets/Icons/BlueProfile.png";
import GreyAddIcon from "../../assets/Icons/GreyAdd.png";
import GreyCalendarIcon from "../../assets/Icons/GreyCalendar.png";
import GreyHomeIcon from "../../assets/Icons/GreyHome.png";
import GreyProfileIcon from "../../assets/Icons/GreyProfile.png";
import MapGreyIcon from "../../assets/Icons/MapGrey.png";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  // Function to determine the icon for each tab based on the current route
  const getIcon = (routeName, focused) => {
    switch (routeName) {
      case "Map":
        return focused ? BlueMapIcon : MapGreyIcon;
      case "Add Workout":
        return focused ? BlueAddIcon : GreyAddIcon;
      case "Home":
        return focused ? BlueHomeIcon : GreyHomeIcon;
      case "Calendar":
        return focused ? BlueCalendarIcon : GreyCalendarIcon;
      case "Profile":
        return focused ? BlueProfileIcon : GreyProfileIcon;
      default:
        return null;
    }
  };

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
        {/* Display the current route name */}
        <Text>{navigation ? navigation.getCurrentRoute()?.name : null}</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            // Get the icon for the current route
            const icon = getIcon(route.name, focused);
            return icon && <Image source={icon} style={{ width: 24, height: 24 }} />;
          },
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Add Workout" component={AddWorkoutScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
