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
        marginVertical: 8,
        color: "#fff",
        backgroundColor: COLOR.RED,
        borderRadius: 16,
        marginTop: 32
    },
    btnText: {
        color: COLOR.LIGHT,
        fontWeight: "bold"
    },
    error: {
        color: 'red',
        marginTop: 2,
        textAlign: 'left'
    },
    link: {
        textDecorationLine: 'underline',
        color: COLOR.LINK_COLOR,
        textAlign: "center",
        marginTop: 32,
        fontWeight: "bold"
    },
    signupAsMessage: {
        marginTop: 32,
        fontWeight: "bold"
    },
    signupAsButtons: {
        display: "flex",
        justifyContent: "center"
    }
});

export default styles;