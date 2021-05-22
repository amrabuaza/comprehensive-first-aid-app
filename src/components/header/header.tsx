/**
 * name: header/header.tsx
 * desc: This file contains a header of app.
 */

import React from 'react';
import { Appbar } from 'react-native-paper';
import { ViewStyle, TextStyle } from 'react-native';
import styles from './styles';
import { COLOR } from '../../theme';

/**
 * type checking.
 */
interface HeaderProps {
    handleGoBack?: () => void;
    title?: string;
    style?: ViewStyle | ViewStyle[];
    titleStyle?: TextStyle | TextStyle[];
};

/**
 * A function component that shows the header.
 */
function Header(props: HeaderProps) {

    /**
     * grap the props.
     */
    const {
        handleGoBack,
        title,
        style: overrideStyle,
        titleStyle: overrideTitleStyle
    } = props;

    return (
        <Appbar.Header
            style={
                [
                    styles.header,
                    overrideStyle
                ]
            }
        >
            {
                handleGoBack &&
                <Appbar.BackAction
                    onPress={handleGoBack}
                    color={COLOR.DARK}
                />
            }

            <Appbar.Content
                titleStyle={
                    [
                        styles.titleStyle,
                        overrideTitleStyle
                    ]
                }
                title={title}
            />
        </Appbar.Header>
    );
};

/**
 * export as default.
 */
export default Header;