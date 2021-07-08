import AsyncStorage from "@react-native-async-storage/async-storage";
import { petsProps } from "../components/PetCard";
import { pets } from "../utils/pets";

export const saveFavorites = async (favorite: petsProps) => {
    try {
        const listOfFavoritesPets = await getPets() as petsProps[];

        const result = listOfFavoritesPets.filter(pet => pet.id === favorite.id);

        if (result.length <= 0) {
            const newFavoriteList = [...listOfFavoritesPets, favorite]
            await AsyncStorage.setItem('@adopet/pets', JSON.stringify(newFavoriteList));
        }

    } catch (error) {
        throw error;

    }
}

export const removeFavorite = async (favorite: petsProps) => {
    try {
        const listOfFavoritesPets = await getPets() as petsProps[];
        const newListOfFavorites = listOfFavoritesPets.filter(pet => pet.id !== favorite.id);

        await AsyncStorage.setItem('@adopet/pets', JSON.stringify(newListOfFavorites));

    } catch (error) {
        throw error;
    }
}


export const savePets = async (favorite: petsProps[]) => {
    try {
        const listOfFavoritesPets = await getPets() as petsProps[];

        if (listOfFavoritesPets.length == 0) {
            const newFavoriteList = [...listOfFavoritesPets, favorite]
            await AsyncStorage.setItem('@adopet/pets', JSON.stringify(newFavoriteList));
        }

    } catch (error) {
        throw error;

    }
}

export const getPets = async () => {
    try {
        const petsList = await AsyncStorage.getItem('@adopet/pets');
        return petsList ? JSON.parse(petsList) : pets;
    } catch (error) {
        throw error;
    }
}