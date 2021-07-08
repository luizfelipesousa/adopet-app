import React, { ReactNode } from 'react';
import { styles } from './styles';

import { View } from 'react-native';

type roundedProps = {
    size?: number;
    children: ReactNode;
}

export function RoundedIcon({ size = 40, children }: roundedProps) {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            {children}
        </View>
    );
}