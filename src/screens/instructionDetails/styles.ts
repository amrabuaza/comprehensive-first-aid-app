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
    }
});

export default styles;