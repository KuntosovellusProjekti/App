import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function TrackingScreen() {
    const [location, setLocation] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    });
    const [tracking, setTracking] = useState(false);
    const [routeCoordinates, setRouteCoordinates] = useState([]);

    useEffect(() => {
        if (tracking) {
            startTracking();
        } else {
            stopTracking();
        }
    }, [tracking]);

    const startTracking = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Geolocation failed');
            return;
        }

        Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                timeInterval: 5000, // Update every 5 seconds
                distanceInterval: 10, // Update every 10 meters
            },
            locationUpdateCallback
        );
    };

    const locationUpdateCallback = (location) => {
        const { latitude, longitude } = location.coords;
        setLocation({
            ...location,
            latitude,
            longitude,
        });
        setRouteCoordinates((prevCoordinates) => [...prevCoordinates, { latitude, longitude }]);
    };

    const stopTracking = () => {
        // Implement any cleanup if needed
    };

    const toggleTracking = () => {
        setTracking((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={location}>
                <Polyline coordinates={routeCoordinates} strokeWidth={4} strokeColor="#00f" />
                <Marker
                    title='You are here'
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    image={require('../assets/BlueMarkOnMap.png')}
                />
            </MapView>
            <TouchableOpacity onPress={toggleTracking} style={styles.button}>
                <Text style={styles.buttonText}>{tracking ? 'Lopeta' : 'Aloita'} seuranta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: '#0077B6',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
