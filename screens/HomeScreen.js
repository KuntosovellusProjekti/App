import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';

export default function App() {
  const startTracking = () => {
    // Tähän voit lisätä aloitustoiminnallisuuden
  };

  const days = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];

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
        <Text style={styles.liftedKilosText}>Nostetut kilot: 0 kg</Text>
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
          <Text style={styles.trainingInfoText}>Teksti 1</Text>
        </View>
        <View style={styles.trainingInfoBox}>
          <Text style={styles.trainingInfoText}>Teksti 2</Text>
        </View>
      </View>
      <TouchableOpacity onPress={startTracking} style={styles.button}>
        <Text style={styles.buttonText}>Aloita harjoitus</Text>
      </TouchableOpacity>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#0077B6',
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    textAlign: 'center',
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayOfWeekText: {
    fontSize: 16,
  },
  trainingInfoBox: {
    backgroundColor: 'ffffff',
    borderWidth: 2,
    borderColor: '#0077B6',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    width: '40%',
    height: 120,
    textAlign: 'center',
  },
  trainingInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#0077B6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginBottom: 100,
    width: '80%',
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  WeekCalendar: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#0077B6",
    borderRadius: 5,
    height: '5%',
    maxHeight: 70,
    width: '80%',
    margin: 50,
  },
  liftedKilos: {
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#0077B6",
    borderRadius: 5,
    height: 100,
    width: '80%',
    margin: 50,
  },
  liftedKilosText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  
});
