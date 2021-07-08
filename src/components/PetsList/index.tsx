import React from 'react';

import { FlatList, View } from 'react-native';
import { PetCard, petsProps } from '../PetCard';

import { styles } from './styles';

interface Props {
    pets: petsProps[]
    navigation: (pet: petsProps) => void;
}

export function PetsList({ pets, navigation }: Props) {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={pets}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <PetCard
                        pet={item}
                        onPress={() => navigation(item)}
                    />
                )}
            />
        </View>
    );
}