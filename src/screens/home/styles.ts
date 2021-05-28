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
        marginBottom: 16,

    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
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
    row: {
        marginTop: 24,
        marginLeft: 16,
        width: "90%"
    },
    containerStyle: {
        width: "50%",
        marginLeft: 16,
    }
});

export default styles;