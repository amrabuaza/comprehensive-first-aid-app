import React, { useEffect } from 'react';
import MainNavigation from './src/navigation/main-navigation';
import User from "./src/context/user";
import * as Location from 'expo-location';

export default function App() {

  /**
   * On load app check location permissions if not granted
   * need to ask user to geant permissions
   */
  useEffect(() => {
    Location.getForegroundPermissionsAsync().then((premissions) => {
      if (!premissions.granted) {
        Location.requestForegroundPermissionsAsync();
      }
    })
  }, [])

  return (
    <User.Provider>
      <MainNavigation />
    </User.Provider>
  );
};
