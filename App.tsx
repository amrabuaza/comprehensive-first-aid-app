import React, { useEffect, useRef, useState } from 'react';
import MainNavigation from './src/navigation/main-navigation';
import User from "./src/context/user";
import * as Location from 'expo-location';
import * as Font from 'expo-font';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  // refs.
  const navRef: any = useRef(null);
  // state.
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // DO YOUR LOGIC.
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const navigateTo = (screenName: string, params?: any) => {
    navRef.current.navigate('InstructionDetails');
  };


  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    // background
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigateTo()
    });

    // closed
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          //  navigateTo()
        }
      });
  }, []);

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
        // navigateTo()
        return;
      }

      setIsSetupCompleted(true);
    })();
  }, [])

  if (!isSetupCompleted) return null;

  return (
    <User.Provider>
      <NavigationContainer ref={navRef} >
        <MainNavigation />
      </NavigationContainer>
    </User.Provider>
  );
};