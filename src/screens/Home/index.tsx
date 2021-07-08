import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Profile } from '../../components/Profile';
import { PetsList } from '../../components/PetsList';
import { MenuBar } from '../../components/MenuBar';
import { CategoriesSelect } from '../../components/CategoriesSelect';

import { getPets, savePets } from '../../services/storage';
import { categories } from '../../utils/categories';
import { pets } from '../../utils/pets';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { petsProps } from '../../components/PetCard';
import { theme } from '../../global/styles/theme';

export function Home() {

    const navigation = useNavigation();
    const [listOfPets, setListOfPets] = useState([] as petsProps[]);
    const [isFavoriteSet, setIsFavoriteList] = useState(false);

    useEffect(() => {
        const listFromStorage = getPets();
        listFromStorage.then((value) => {
            setListOfPets(value);
        });
    }, [])

    function handlePetDetails(petDetails: petsProps) {
        navigation.navigate('PetDetails', petDetails);
    }

    async function handleListFavorites() {
        setIsFavoriteList(!isFavoriteSet);
        if (!isFavoriteSet) {
            const favorites2 = listOfPets.filter(pet => pet.isFavorite);
            setListOfPets(favorites2);
        } else {
            setListOfPets(pets);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor={theme.colors.backGround}
                barStyle='dark-content'
            />
            <Profile />
            <CategoriesSelect categories={categories} />
            <PetsList pets={listOfPets} navigation={handlePetDetails} />
            <MenuBar onPress={handleListFavorites} active={isFavoriteSet} />
        </View>
    );
}