import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FIREBASE_AUTH } from "../services/ApiService";
import { getAuth, deleteUser, auth } from "firebase/auth";
import { LoginScreen } from ".";

const SettingsScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedWeightUnit, setSelectedWeightUnit] = useState("");
  const [selectedDistanceUnit, setSelectedDistanceUnit] = useState("");

  const handleSaveChanges = () => {
    // Logic to save changes
  };

  const handleSignOut = () => {
    // Logic to sign outz
  };

  const handleDeleteUser = () => {
    // Logic to delete account
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      deleteUser(user)
        .then(() => {
          Alert.alert("Account deleted successfully");
          FIREBASE_AUTH.signOut();
          return <LoginScreen />;
        })
        .catch((error) => {
          console.error("Error deleting account", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionHeader}>Kieli</Text>
        <View style={styles.settingItem}>
          <Text>Valitse kieli</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={{ width: 200 }}
          >
            <Picker.Item label="Suomi" value="suomi" />
            <Picker.Item label="Englanti" value="englanti" />
          </Picker>
        </View>

        <Text style={styles.sectionHeader}>Paino yksikkö</Text>
        <View style={styles.settingItem}>
          <Text>Valitse yksikkö</Text>
          <Picker
            selectedValue={selectedWeightUnit}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedWeightUnit(itemValue)
            }
            style={{ width: 200 }}
          >
            <Picker.Item label="kg" value="kg" />
            <Picker.Item label="lb" value="lb" />
          </Picker>
        </View>

        <Text style={styles.sectionHeader}>Mitta yksikkö</Text>
        <View style={styles.settingItem}>
          <Text>Valitse yksikkö</Text>
          <Picker
            selectedValue={selectedDistanceUnit}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDistanceUnit(itemValue)
            }
            style={{ width: 200 }}
          >
            <Picker.Item label="km" value="km" />
            <Picker.Item label="mi" value="mi" />
          </Picker>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#16BD25" }]}
          onPress={handleSaveChanges}
        >
          <Text style={styles.buttonText}>Tallenna muutokset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0077B6" }]}
          onPress={() => FIREBASE_AUTH.signOut()}
        >
          <Text style={styles.buttonText}>Kirjaudu ulos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#B60000" }]}
          onPress={handleDeleteUser}
        >
          <Text style={styles.buttonText}>Poista tili</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.smallButton, { marginTop: 5 }]}>
        <Text style={styles.smallButtonText}>Tietosuojakäytäntö</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  smallButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  smallButtonText: {
    color: "#000",
    textAlign: "center",
  },
});

export default SettingsScreen;
