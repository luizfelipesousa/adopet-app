import React, { ReactNode } from 'react';

import { View, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

interface Props {
    children: ReactNode;
}

export function BackGround({ children }: Props) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backGround
    }
});