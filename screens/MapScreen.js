import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
    const [location, setLocation] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    });

    useEffect(() => {
        (async () => {
            await getUserPosition();
        })();
    }, []);

    const getUserPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        try {
            if (status !== 'granted') {
                console.log('Geolocation failed');
                return;
            }

            const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MapView
            style={styles.map}
            region={location}
            mapType='standard'
        >
            <Marker
                title='You are here'
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});