/**
 * name: layout.ts
 * desc: this file contains the layout of app.
 */

import {
    Dimensions,
    PixelRatio
} from 'react-native';

/**
 * The window layout.
 */
const windowLayout = Dimensions.get('window');

/**
 * A function that gets resposive font.
 */
function getScaledFont(size: number) {
    return size * PixelRatio.getFontScale();
};

/**
 * export layout as default.
 */
export default {
    windowLayout,
    getScaledFont
};