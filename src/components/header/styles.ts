/**
 * name: header/styles.ts
 * desc: This file contains the styles of header.
 */

import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from '../../theme';

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLOR.TRANSPARENT,
        elevation: 0
    },
    titleStyle: {
        fontSize: LAYOUT.getScaledFont(25),
        color: COLOR.DARK,
        fontWeight: 'bold'
    }
});

/**
 * export as default.
 */
export default styles;