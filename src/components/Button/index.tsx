import React from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
    text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity {...rest}
            style={styles.customButton}>
            <Text style={styles.textButton}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
