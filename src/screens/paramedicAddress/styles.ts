import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from '../../theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHT,
        marginTop: 32
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 32,
        color: COLOR.CHARCOAL
    },
    infoItem: {
        margin: 16
    },
    label: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: COLOR.CHARCOAL
    },
    infoItemLabel: {
        fontSize: 18,
        color: COLOR.CHARCOAL
    },
    buttonGroup: {
        marginTop: 24,
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
});

export default styles;