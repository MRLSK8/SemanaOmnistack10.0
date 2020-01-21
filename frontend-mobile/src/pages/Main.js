import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Image } from 'react-native';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInicialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const location = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = location.coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014
        });
      }
    }

    loadInicialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -8.4759531, longitude: -35.7327309 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
          }}
        />
      </Marker>
      <Marker coordinate={{ latitude: -8.4769531, longitude: -35.7302000 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
          }}
        />
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 54,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export default Main;
