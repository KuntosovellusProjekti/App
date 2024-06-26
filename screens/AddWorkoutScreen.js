import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FIREBASE_DB } from '../services/ApiService';

const AddWorkoutScreen = () => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [notes, setNotes] = useState('');
  const [distance, setDistance] = useState('');
  const [weight, setWeight] = useState('');

  const handleSave = async () => {
    if (!selectedExercise || (hours === 0 && minutes === 0)) {
      Alert.alert('Ongelma tallentamisessa', 'Lisää aika ja treeni.');
      return;
    }

    const payload = {
      exercise: selectedExercise,
      durationHours: hours,
      durationMinutes: minutes,
      notes: notes,
      timestamp: serverTimestamp(),
    };

    if (['juoksu', 'uinti', 'pyoraily'].includes(selectedExercise)) {
      payload.distance = distance;
    } else if (selectedExercise === 'kuntosali') {
      payload.weightLifted = weight;
    }

    try {
      await addDoc(collection(FIREBASE_DB, "workouts"), payload);
      Alert.alert('Treenisi on tallennettu');
      setSelectedExercise('');
      setHours(0);
      setMinutes(0);
      setNotes('');
      setDistance('');
      setWeight('');
    } catch (error) {
      console.error('Ongelma tallentamisessa: ', error);
      Alert.alert('Treenin tallentaminen epäonnistui', 'Yritä uudelleen.');
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedExercise}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedExercise(itemValue);
          setDistance('');
          setWeight('');
        }}
      >
        <Picker.Item label="Valitse" value="" />
        <Picker.Item label="Juoksu" value="juoksu" />
        <Picker.Item label="Uinti" value="uinti" />
        <Picker.Item label="Pyöräily" value="pyoraily" />
        <Picker.Item label="Kuntosali" value="kuntosali" />
      </Picker>

      {['juoksu', 'uinti', 'pyoraily'].includes(selectedExercise) && (
        <TextInput
          placeholder="Kilometrit"
          keyboardType="numeric"
          style={styles.input}
          value={distance}
          onChangeText={setDistance}
        />
      )}

      {selectedExercise === 'kuntosali' && (
        <TextInput
          placeholder="Nostetut kilot yhteensä"
          keyboardType="numeric"
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
        />
      )}

      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => setHours(hours === 23 ? 0 : hours + 1)}>
          <Text style={styles.timeButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>{hours.toString().padStart(2, '0')}</Text>
        <TouchableOpacity onPress={() => setHours(hours === 0 ? 23 : hours - 1)}>
          <Text style={styles.timeButton}>-</Text>
        </TouchableOpacity>
        <Text>:</Text>
        <TouchableOpacity onPress={() => setMinutes(minutes === 59 ? 0 : minutes + 1)}>
          <Text style={styles.timeButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>{minutes.toString().padStart(2, '0')}</Text>
        <TouchableOpacity onPress={() => setMinutes(minutes === 0 ? 59 : minutes - 1)}>
          <Text style={styles.timeButton}>-</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Muistiinpanot (max 100 characters)"
        maxLength={100}
        multiline={true}
        style={styles.notesInput}
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Tallenna</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    maxHeight: 100,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddWorkoutScreen;
