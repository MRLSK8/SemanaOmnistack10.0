import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

function Main({ navigation }) {
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
      <Marker coordinate={{ latitude: -8.2777339, longitude: -35.9738066 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
          }}
        />
        <Callout onPress={() => {navigation.navigate('Profile', {
          github_username: 'mrlsk8'
        })}}>
          <View style={styles.callout}>
            <Text style={styles.devName}>Marcelo Lima</Text>
            <Text style={styles.devBio}>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </Text>
            <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
          </View>
        </Callout>
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
  },

  callout: {
    width: 260,
    padding: 10
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
    color: '#666',
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  }
});

export default Main;
