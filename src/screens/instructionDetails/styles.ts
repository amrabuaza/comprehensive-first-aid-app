import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.TRANSPARENT
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 32
    },
    description: {
        margin: 16,
        fontSize: 18
    },
    label: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    step: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 16,
        marginBottom: 8
    },
    instructionItem: {
        marginBottom: 16
    },
    buttonGroup: {
        marginTop: 46,
        margin: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        color: "#fff",
        backgroundColor: COLOR.RED,
        borderRadius: 16,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        margin: 8
    },
    btnText: {
        alignSelf: 'center',
        color: COLOR.LIGHT,
        fontWeight: "bold",
        textAlign: "center"
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
});

export default styles;