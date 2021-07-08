import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        marginLeft: 24,
        marginTop: 10,
        width: 82,
        height: 34,

        backgroundColor: theme.colors.backGround,
        borderRadius: 18,

        shadowColor: "#7878AB",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

        alignItems: 'center',
        justifyContent: 'center',
    },

    categoryText: {
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        color: theme.colors.textCategory,
    },

});

