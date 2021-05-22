/**
 * name: text/styles.tsx
 * desc: This file contains a text of app.
 */

import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from '../../theme';

const styles = StyleSheet.create({
    text: {
        color: COLOR.DARK,
        fontSize: LAYOUT.getScaledFont(16)
    }
});

/**
 * export as default.
 */
export default styles;