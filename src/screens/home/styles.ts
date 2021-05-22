import { StyleSheet } from 'react-native';
import {
    COLOR,
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.TRANSPARENT,
        marginTop: 32
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 32,
        color: COLOR.CHARCOAL
    },
    instructionItem: {
        marginBottom: 16
    },
    btn: {
        alignSelf: 'center',
        marginVertical: 8,
        color: "#fff",
        backgroundColor: COLOR.RED,
        borderRadius: 16,
        marginTop: 32,
    },
    btnText: {
        color: COLOR.LIGHT,
        fontWeight: "bold",
    },
    instructionTitle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        color: COLOR.CHARCOAL
    },
    label: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        color: COLOR.CHARCOAL
    },
});

export default styles;