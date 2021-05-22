/**
 * name: loader/styles.ts
 * desc: This file contains a loader styles of app.
 */

import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme';

const styles = StyleSheet.create({
    conatiner: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLOR.KOBI_OVERLAY,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

/**
 * export as default.
 */
export default styles;