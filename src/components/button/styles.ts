/**
 * name: button/styles.ts
 * desc: This file contains a button styles.
 */

import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme';

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLOR.KOBI,
        width: '100%',
        borderRadius: 10
    },
    btnLabelStyle: {
        color: COLOR.DARK
    }
});

/**
 * export as default.
 */
export default styles;