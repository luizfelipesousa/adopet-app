import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 24,
        marginVertical: 15,
        backgroundColor: theme.colors.backGround,
        borderRadius: 16,
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    petAvatar: {
        marginLeft: -24,
        height: 130,
        width: 150,
    },

    card: {},

    petInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
    },

    title: {
        fontSize: 20,
        fontFamily: theme.fonts.title,
        color: theme.colors.title,
    },

    location: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationText: {
        fontSize: 12,
        marginLeft: 4,
        color: theme.colors.description,
    },

    favorite: {
        marginRight: 12,
        marginTop: -4,
        right: -50,
    },

    textDescription: {
        width: 189,
        marginTop: 12,
        marginBottom: 16,
        lineHeight: 20,
        color: theme.colors.gray2,
    },
});

