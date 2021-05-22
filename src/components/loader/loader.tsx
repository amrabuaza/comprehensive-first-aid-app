/**
 * name: loader/loader.tsx
 * desc: This file contains a loader of app.
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { COLOR } from '../../theme';

/**
 * A function component that shows a loader.
 */
function Loader() {
    return (
        <View style={styles.conatiner}>
            <ActivityIndicator
                color={COLOR.RED}
                size={'large'}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default Loader;