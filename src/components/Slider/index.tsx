import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export function Slider() {
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <View style={styles.oval} />
                <View style={styles.oval} />
                <View style={styles.rect} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
    },
    sliderContainer: {
        flexDirection: 'row',
    },

    oval: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
        opacity: 0.21,
        marginHorizontal: 2,
    },

    rect: {
        width: 24,
        height: 4,
        borderRadius: 4,
        marginHorizontal: 2,
        backgroundColor: theme.colors.primary,
    }
})