import React from 'react';

import { View, Text, Image } from 'react-native';

import { RoundedIcon } from '../RoundedIcon';
import { Feather } from '@expo/vector-icons';

import NotificationBell from '../../assets/notification-bell.png';
import PinLocationSvg from '../../assets/pin-full.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.personInfo}>

                <RoundedIcon size={41}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'https://github.com/luizfelipesousa.png' }}
                        resizeMode='contain'
                    />
                </RoundedIcon>


                <View style={styles.personAddress}>
                    <PinLocationSvg 
                        style={{marginRight: 8}}
                    />
                    <Text style={styles.adress}>New York City</Text>
                    <Image
                        style={styles.pin}
                        source={require('../../assets/owner-pin.png')}
                        resizeMode='contain'

                    />
                </View>
            </View>
            <RoundedIcon>
                <Image
                    style={styles.notification}
                    source={NotificationBell}
                    resizeMode='contain'
                />
            </RoundedIcon>
        </View>
    );
}