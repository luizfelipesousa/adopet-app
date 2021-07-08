import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Slider } from '../../components/Slider';

import AnimalSvg from '../../assets/Animal.svg';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';

export function Skip() {

    const navigation = useNavigation();

    function handleSkip() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor={theme.colors.backGround}
                barStyle='dark-content' />
            <View style={styles.imageContainer}>
                <AnimalSvg
                    width={400}
                    height={400} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    My Pets
                </Text>
                <Text style={styles.textDescription}>
                    Taking care of a pet is my favorite, it helps {'\n'} me to gaimr stress and fatigue.
                </Text>
            </View>
            <View style={styles.slider}>
                <Slider />
            </View>
            <View style={styles.buttonBar}>
                <Button text="Skip" activeOpacity={0.6} onPress={handleSkip} />
            </View>
        </View>
    );
}