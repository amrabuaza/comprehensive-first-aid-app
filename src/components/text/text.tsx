/**
 * name: text/text.tsx
 * desc: This file contains a text of app.
 */

import React, { ReactNode } from 'react';
import styles from './styles';
import { Text as RNPaperTxt } from 'react-native-paper';
import { TextStyle } from 'react-native';

/**
 * type checking.
 */
interface TextProps {
    children: ReactNode;

    /**
     * optional props.
     */
    textStyle?: TextStyle;
    numberOfLines?: number;
    lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip';
};

/**
 * A function component that shows a text.
 */
function Text(props: TextProps) {

    /**
     * grap the props.
     */
    const {
        textStyle,
        children,
        numberOfLines,
        lineBreakMode = 'tail'
    } = props;

    return (
        <RNPaperTxt
            style={[
                styles.text,
                textStyle
            ]}
            numberOfLines={numberOfLines}
            lineBreakMode={lineBreakMode}
        >
            {children}
        </RNPaperTxt>
    );
};

/**
 * export as default.
 */
export default Text;