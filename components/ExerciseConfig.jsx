import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-ico-material-design';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const ExerciseConfig = () => {

  // This is to handle clicking of the start and pause button
  const [isStarting,setisStarting] = useState(false);
  const handlePress = () => {
    setisStarting(!isStarting);
    console.log(location);
  }

  // This is to handle the collection of user's live location
  const [location,setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(Location.Accuracy.High);
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("Location information: " + location)
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    })();
  },[])

  return (
      <View>
        <View style={styles.container}> 
          <View style={styles.timer}>
            <TouchableOpacity onPress={handlePress}>
              <Icon 
                name= {!isStarting ? "play-arrow" : "pause-button"} 
                color="#F89880"> 
              </Icon>
            </TouchableOpacity>
          </View>
        </View>
        <MapView style={styles.map} initialRegion={location}> 
          <Marker
            coordinate={location}
            pinColor="#F89880"
            >
          </Marker>
          <Circle center={location} radius={250}  ></Circle>
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '35%',
      backgroundColor: '#5F8575',
      alignItems: 'center'
    },
    map: {
      width: '100%',
      height: '65%',
    },
    timer: {
      borderRadius:50,
      borderColor: '#FFE5B4',
      borderWidth: 3,
      backgroundColor: 'transparent',
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: '10%',
      alignItems: 'center',
      justifyContent: 'center',
    },


    
  });

export default ExerciseConfig;