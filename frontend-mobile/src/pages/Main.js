import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../services/socket';

import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function loadInicialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const location = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = location.coords;

        const response = await api.get('/search', {
          params: { latitude, longitude }
        });

        setDevs(response.data);

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0010,
          longitudeDelta: 0.0010
        });
      }
    }

    loadInicialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  function setUpWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;
    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: techs
      }
    });

    setDevs(response.data);
    setTechs('');
    setUpWebsocket();
  }

  function handleReagionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleReagionChange}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {devs &&
          devs.map(dev => (
            <Marker
              key={dev._id}
              coordinate={{
                longitude: dev.location.coordinates[0],
                latitude: dev.location.coordinates[1]
              }}
            >
              <Image
                style={styles.avatar}
                source={{
                  uri: dev.avatar_url
                }}
              />
              <Callout
                onPress={() => {
                  navigation.navigate('Profile', {
                    github_username: dev.github_username
                  });
                }}
              >
                <View style={styles.callout}>
                  <Text style={styles.devName}>{dev.name}</Text>
                  <Text style={styles.devBio}>{dev.bio}</Text>
                  <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder='Buscar devs por techs'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name='my-location' size={30} color='#FFF' />
        </TouchableOpacity>
      </View>
    </>
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
  },

  searchForm: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: 'red',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 5
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
});

export default Main;
