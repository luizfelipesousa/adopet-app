import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RoundedIcon } from '../RoundedIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';


type menuProps = TouchableOpacityProps & {
    active: boolean;
}

export function MenuBar({ active, ...rest }: menuProps) {

    const home = false;

    return (
        <View style={styles.container}>
            <RoundedIcon>
                <Feather
                    style={true ? styles.selected : styles.unselected}
                    name="home"
                    size={20}
                    color={theme.colors.description} />
            </RoundedIcon>
            <RoundedIcon>
                <Feather
                    style={home ? styles.selected : styles.unselected}
                    name="message-circle"
                    size={20}
                    color={theme.colors.description} />
            </RoundedIcon>
            <TouchableOpacity {...rest}>
                <RoundedIcon>
                    <MaterialIcons
                        style={styles.unselected}
                        name={active ? "favorite" : "favorite-border"}
                        size={20}
                        color={active ? theme.colors.accent2 : theme.colors.description} />
                </RoundedIcon>
            </TouchableOpacity>
            <RoundedIcon>
                <Feather
                    style={home ? styles.selected : styles.unselected}
                    name="user"
                    size={20}
                    color={theme.colors.description} />
            </RoundedIcon>
        </View>
    );
}