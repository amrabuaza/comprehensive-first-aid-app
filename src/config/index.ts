/**
 * name: config/index.ts
 * desc: This file contains all config for app.
 */

import DeviceInfo from 'react-native-device-info';

/**
 * A function that gets an application name.
 */
function getAppName(): string {
    return DeviceInfo.getApplicationName();
};

/**
 * A function gets an app version.
 */
function getAppVersion(): string {
    return DeviceInfo.getReadableVersion();
};

/**
 * export all nedded data.
 */
//export { default as SHARED_VARIABLES } from './env-variables';
export {
    getAppName,
    getAppVersion,
};