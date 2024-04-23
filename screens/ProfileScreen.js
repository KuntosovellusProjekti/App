import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ProfilePage = () => {
  // Dummy user data (replace with actual user data)
  const personalRecords = {
    penkki: "100 kg",
    cooper: "2km",
    kyykky: "150 kg",
    maastaveto: "200 kg",
  };

  const profileData = {
    name: "Matti Meikäläinen",
    username: "(MatMan69)",
    email: "matti.meikalainen@gmail.com",
  };
  const stats = {
    lastWorkout: "10.4",
    NumOfWorkouts: "25",
    Traveled: "110km",
    Lifted: "25000 kg",
  };
  const userData = {
    sex: "Mies",
    age: 24,
    weight: 80,
    height: 180,
    personalRecords,
    profileData,
    stats,
  };

  const handleChangeInfoPress = () => {
    // Add logic to navigate to the screen for changing user information
    console.log("Change Info button pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Profilepic.png")}
        style={styles.profilePic}
      />
      <View style={styles.profileData}>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.subheader}>{profileData.username}</Text>
        <Text style={styles.subheader}>{profileData.email}</Text>
      </View>

      <View style={styles.userData}>
        <Text style={styles.header}>Omat tiedot</Text>
        <Text style={styles.subheader}>Sukupuoli : {userData.sex}</Text>
        <Text style={styles.subheader}>Ikä : {userData.age}</Text>
        <Text style={styles.subheader}>Paino : {userData.weight} kg</Text>
        <Text style={styles.subheader}>Pituus : {userData.height} cm</Text>
      </View>

      <View style={styles.personalRecords}>
        <Text style={styles.header}>Ennätykset</Text>
        <Text style={styles.subheader}>
          Penkki: {userData.personalRecords.penkki}
        </Text>
        <Text style={styles.subheader}>
          Cooper: {userData.personalRecords.cooper}
        </Text>
        <Text style={styles.subheader}>
          Kyykky: {userData.personalRecords.kyykky}
        </Text>
        <Text style={styles.subheader}>
          Maastaveto: {userData.personalRecords.maastaveto}
        </Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.header}>Tilastot</Text>
        <Text style={styles.subheader}>
          Viimeisin treeni: {userData.stats.lastWorkout}
        </Text>
        <Text style={styles.subheader}>
          Treenikertoja: {userData.stats.NumOfWorkouts}
        </Text>
        <Text style={styles.subheader}>
          Kuljettu matka: {userData.stats.Traveled}
        </Text>
        <Text style={styles.subheader}>
          Nostetut kilot: {userData.stats.Lifted}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleChangeInfoPress}>
          <Text style={styles.buttonText}>Muokkaa tietoja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    borderColor: "#0077B6",
    borderRadius: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: -40,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "#0077B6",
    alignSelf: "flex-start",
  },
  profileData: {
    marginBottom: 10,
    marginStart: 1,
    fontSize: 16,
    paddingLeft: 120,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    marginTop: -40,
    paddingLeft: 25,
  },
  userData: {
    marginBottom: 10,
    fontSize: 16,
    marginStart: 1,
  },
  personalRecords: {
    marginBottom: 10,
    fontSize: 16,
    marginStart: 1,
  },
  stats: {
    marginBottom: 10,
    fontSize: 16,
    marginStart: 1,
  },
  button: {
    backgroundColor: "#0077B6",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
    marginLeft: 24,
  },
});

export default ProfilePage;
