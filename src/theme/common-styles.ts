/**
 * name: common-styles.ts
 * desc: this file contains the common styles of app.
 */
import { StyleSheet } from 'react-native';
import { COLOR } from '.';

const styles = StyleSheet.create({
    flex: { flex: 1 },
    nonFlex: { flex: 0 },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxShadow: {
        shadowColor: COLOR.DARK,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    }
});

/**
 * export common styles as default.
 */
export default styles;