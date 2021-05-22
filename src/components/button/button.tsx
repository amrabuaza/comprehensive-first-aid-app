/**
 * name: button/button.tsx
 * desc: This file contains a button of app.
 */

import React from 'react';
import { Button as RNPaperBtn } from 'react-native-paper';
import styles from './styles';
import { ViewStyle } from 'react-native';

/**
 * type checking.
 */
interface ButtonProps {
    label: string;
    onPress: () => void;

    /**
     * optional props.
     */
    style?: ViewStyle;
};

/**
 * A function component that shows a button.
 */
function Button(props: ButtonProps) {

    /**
     * grap the props.
     */
    const {
        label,
        onPress,
        style: overrideBtnStyle
    } = props;

    return (
        <RNPaperBtn
            onPress={onPress}
            style={[styles.btn, overrideBtnStyle]}
            labelStyle={styles.btnLabelStyle}
        >
            {label}
        </RNPaperBtn>
    );
};

/**
 * export as default.
 */
export default Button;