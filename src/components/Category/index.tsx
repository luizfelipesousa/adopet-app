import React from 'react';
import { styles } from './styles';

import { View, Text } from 'react-native';


export type categoryProps = {
    id: string;
    name: string;
};

export function Category({ id, name }: categoryProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>
                {name}
            </Text>
        </View>
    );
}