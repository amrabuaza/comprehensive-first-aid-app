/**
 * name: reactotron-config.ts
 * desc: This file contains the init for 'Reactotron', is
 * * a debugger tool for storage, network requests, and state management ...
 * * for more info: #https://github.com/infinitered/reactotron.
 */

import Reactotron from 'reactotron-react-native';
import { NativeModules } from "react-native";

/**
 * grabs the ip address, to run physical Android device.
 */
const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

/**
 * configure "Reactotron".
 * 
 * works on debug env only.
 */
Reactotron
    .configure({ host: scriptHostname })
    .connect();