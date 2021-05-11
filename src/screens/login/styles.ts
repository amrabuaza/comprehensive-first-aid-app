/**
 * name: albums/styles.ts
 * desc: The styles of albums screen live here.
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';
import layout from 'theme/layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CORNFLOWER_BLUE
    },
    album: {
        flex: 1,
        height: (layout.windowLayout.height / 4),
        borderRadius: 8,
        backgroundColor: COLOR.KOBI,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        textAlign: 'center'
    }
});

/**
 * export as default.
 */
export default styles;