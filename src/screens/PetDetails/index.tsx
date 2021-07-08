import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ImageBackground, Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { petsProps } from '../../components/PetCard';
import { RoundedIcon } from '../../components/RoundedIcon';

import PinSvg from '../../assets/pin.svg';

import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function PetDetails() {

    const route = useRoute();
    const pet = route.params as petsProps;

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={theme.colors.secondary}
            />
            <ImageBackground
                source={require('../../assets/backGround.png')}
                resizeMethod='resize'
                style={styles.containerImage}>
                <Image
                    source={pet.breed === 'Greyhound' ?
                        require('../../assets/Greyhound-big.png') :
                        pet.breed === 'Dobermann' ?
                            require('../../assets/Dobermann.png') :
                            require('../../assets/Pomeranian.png')}
                    width={270}
                    height={270}
                    resizeMode='cover'
                    style={styles.image}
                />
            </ImageBackground>


            <View style={styles.containerDescription}>

                <View>
                    <Text style={styles.title}>
                        {pet.breed}
                    </Text>
                    <View style={styles.location}>
                        <PinSvg />
                        <Text style={styles.locationText}>
                            {pet.location}
                        </Text>
                    </View>
                </View>

                <View style={styles.breedInfo}>
                    <View style={styles.cardBreedInfo}>
                        <RoundedIcon >
                            <Ionicons name="paw-outline" size={24} color={theme.colors.accent1} />
                        </RoundedIcon>
                        <Text style={styles.breedInfoText}>
                            {pet.breed}
                        </Text>
                    </View>

                    <View style={styles.cardBreedInfo}>
                        <RoundedIcon >
                            <Image
                                source={require('../../assets/gender.png')}
                                width={24}
                                height={24}
                                resizeMode='contain'
                            />
                        </RoundedIcon>
                        <Text style={styles.breedInfoText}>
                            Male
                        </Text>
                    </View>
                </View>

                <View style={styles.textArea}>
                    <Text style={styles.aboutPet}
                        numberOfLines={4}

                    >
                        The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the fam...
                        <Text style={styles.more} >
                            {' '}More
                        </Text>
                    </Text>
                </View>

                <View style={styles.pics}>
                    <View style={styles.pic}>
                        <RoundedIcon size={60} >
                            <Image
                                style={styles.imgPic}
                                source={require('../../assets/pic1.png')}
                                width={50}
                                height={50}
                                resizeMode='contain'
                            />
                        </RoundedIcon>
                    </View>
                    <View style={styles.pic}>
                        <RoundedIcon size={60} >
                            <Image
                                style={styles.imgPic}
                                source={require('../../assets/pic2.png')}
                                width={50}
                                height={50}
                                resizeMode='contain'
                            />
                        </RoundedIcon>
                    </View>
                    <View style={styles.pic}>
                        <RoundedIcon size={60} >
                            <Image
                                style={styles.imgPic}
                                source={require('../../assets/pic3.png')}
                                width={50}
                                height={50}
                                resizeMode='contain'
                            />
                        </RoundedIcon>
                    </View>
                </View>


                <Button text='Adopt now' activeOpacity={0.3} />
            </View>
        </View>
    );
}