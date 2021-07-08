import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
    , Image,
} from 'react-native';


import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { RoundedIcon } from '../RoundedIcon';

import { saveFavorites } from '../../services/storage';

import PinSvg from '../../assets/pin.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';



type Props = RectButtonProps & {
    pet: petsProps;
}

export type petsProps = {
    id: string;
    breed: string;
    location: string;
    isFavorite: boolean;
    description: string;
}

export function PetCard({ pet, ...rest }: Props) {

    const path = '../../assets/Dobermann.png';
    const path2 = '../../assets/Greyhound.png';
    const path3 = '../../assets/Pomeranian.png';

    const [favorites, setFavorite] = useState(pet.isFavorite)

    async function handleFavoritePet(pet: petsProps) {
        setFavorite(!favorites);
        pet.isFavorite = !pet.isFavorite;
        await saveFavorites(pet);
    }

    return (
        <View
            style={styles.container}>
            <Image
                source={
                    pet.breed === 'Dobermann' ?
                        require(path) :
                        pet.breed === 'Greyhound' ?
                            require(path2) :
                            require(path3)
                }
                resizeMode='contain'
                style={styles.petAvatar}
                width={130}
                height={130}
            />

            <View style={styles.card}>
                <View style={styles.petInfo}>
                    <View >
                        <RectButton
                            {...rest}
                        >
                            <Text style={styles.title}>
                                {pet.breed}
                            </Text>
                        </RectButton>
                        <View style={styles.location}>
                            <PinSvg />
                            <Text style={styles.locationText}>
                                {pet.location}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => handleFavoritePet(pet)}
                        activeOpacity={0.6}
                        style={styles.favorite} >
                        <RoundedIcon size={35}>
                            <MaterialIcons
                                name={favorites ? "favorite" : "favorite-border"}
                                size={20}
                                color={favorites ? theme.colors.accent2 : theme.colors.description}
                            />

                        </RoundedIcon>
                    </TouchableOpacity>
                </View>


                <Text style={styles.textDescription}
                    numberOfLines={2}>
                    {pet.description}
                </Text>
            </View>

        </View>
    );
}