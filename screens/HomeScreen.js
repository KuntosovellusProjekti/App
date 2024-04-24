import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_DB } from "../services/ApiService";
import { collection, getDocs, query, where } from "firebase/firestore";

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} h ja ${minutes} min treenattu tässä kuussa`;
}

export default function HomeScreen() {
  const [trainingTime, setTrainingTime] = useState("");
  const [liftedKilos, setLiftedKilos] = useState("");
  const [totalDistance, setTotalDistance] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchLiftedKilos = async () => {
      const q = query(collection(FIREBASE_DB, "workouts"));
      const querySnapshot = await getDocs(q);
      let totalKilos = 0;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const weight = parseFloat(data.weightLifted);
        if (!isNaN(weight)) {
          totalKilos += weight;
        }
      });
      setLiftedKilos(`Nostetut kilot: ${totalKilos} kg`);
    };

    fetchLiftedKilos();
  }, []);

  useEffect(() => {
    const fetchTrainingData = async () => {
      const q = query(collection(FIREBASE_DB, "workouts"));
      const querySnapshot = await getDocs(q);
      let totalMinutes = 0;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        totalMinutes += data.durationHours * 60 + data.durationMinutes;
      });
      const formattedTime = formatTime(totalMinutes);
      setTrainingTime(`${formattedTime}`);
    };

    fetchTrainingData();
  }, []);

  useEffect(() => {
    const fetchTotalDistance = async () => {
      const q = query(collection(FIREBASE_DB, "workouts"));
      const querySnapshot = await getDocs(q);
      let totalDistance = 0;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const distance = parseFloat(data.distance);
        if (!isNaN(distance)) {
          totalDistance += distance;
        }
      });
      setTotalDistance(`Kuljettu matka: ${totalDistance.toFixed(1)} km`);
    };

    fetchTotalDistance();
  }, []);

  const days = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];
  const getWeekDates = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 1 ? 0 : 1);
    const weekStart = new Date(today.setDate(diff));
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const renderItem = ({ item }) => (
    <View style={styles.dayContainer}>
      <Text style={styles.dayText}>{item.getDate()}</Text>
      <Text style={styles.dayOfWeekText}>{days[item.getDay()]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.liftedKilos}>
        <Text style={styles.liftedKilosText}>{liftedKilos}</Text>
      </View>
      <FlatList
        style={styles.WeekCalendar}
        data={getWeekDates()}
        renderItem={renderItem}
        keyExtractor={(item) => item.toISOString()}
        horizontal
      />
      <View style={styles.infoContainer}>
        <View style={styles.trainingInfoBox}>
          <Text style={styles.trainingInfoText}>{trainingTime}</Text>
        </View>
        <View style={styles.trainingInfoBox}>
          <Text style={styles.trainingInfoText}>{totalDistance}</Text>
        </View>
      </View>
      <TouchableOpacity
        name="SiirryTracking"
        onPress={() => navigation.navigate("TrackingScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Aloita harjoitus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "#0077B6",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 20,
    textAlign: "center",
  },
  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dayOfWeekText: {
    fontSize: 16,
  },
  trainingInfoBox: {
    backgroundColor: "ffffff",
    borderWidth: 2,
    borderColor: "#0077B6",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    width: "40%",
    height: 120,
    textAlign: "center",
  },
  trainingInfoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "#0077B6",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginBottom: 75,
    width: "80%",
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  WeekCalendar: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#0077B6",
    borderRadius: 5,
    height: "5%",
    maxHeight: 70,
    width: "80%",
    margin: 20,
  },
  liftedKilos: {
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#0077B6",
    borderRadius: 5,
    height: 100,
    width: "80%",
    margin: 50,
  },
  liftedKilosText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
});
