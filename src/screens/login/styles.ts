import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHT
    },
    img: {
        height: LAYOUT.windowLayout.width / 2,
        width: LAYOUT.windowLayout.width / 2,
        alignSelf: 'center',
        marginVertical: 16,
        borderRadius: 16
    },
    inputsContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    btn: {
        alignSelf: 'center',
        marginVertical: 8
    }
});

export default styles;