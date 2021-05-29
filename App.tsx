import React, { useEffect, useState } from 'react';
import MainNavigation from './src/navigation/main-navigation';
import User from "./src/context/user";
import * as Location from 'expo-location';
import * as Application from 'expo-application';
import * as Font from 'expo-font';
import { Alert } from 'react-native';

export default function App() {

  // state.
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);

  /**
   * On load app check location permissions if not granted
   * need to ask user to geant permissions
   */
  useEffect(() => {
    (async function () {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('You should grant a location permission, plesae enabe it from settings.')
        return;
      }

      setIsSetupCompleted(true);
    })();
  }, [])

  if (!isSetupCompleted) return null;
  return (
    <User.Provider>
      <MainNavigation />
    </User.Provider>
  );
};
