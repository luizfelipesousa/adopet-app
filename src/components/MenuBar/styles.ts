import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        backgroundColor: theme.colors.backGround,
        justifyContent: 'space-evenly',
        paddingTop: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    selected: {
        color: theme.colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    unselected: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }

});

