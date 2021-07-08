import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
    },

    containerImage: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    image: {
        width: 270,
        height: 270,
        bottom: -10,
    },

    containerDescription: {
        flex: 5,
        backgroundColor: theme.colors.backGround,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        padding: 24,
    },

    title: {
        fontSize: 22,
        fontFamily: theme.fonts.title,
        color: theme.colors.title,
    },

    location: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationText: {
        fontSize: 14,
        marginLeft: 8,
        color: theme.colors.description,
    },

    breedInfo: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 16,
    },

    cardBreedInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 46,
    },

    breedInfoText: {
        marginLeft: 16,
        color: theme.colors.gray2,
    },

    textArea: {
        marginBottom: 16,
        flexDirection: 'row',
    },

    aboutPet: {
        lineHeight: 30,
        fontSize: 16,
        color: theme.colors.description
    },

    more: {
        lineHeight: 30,
        fontSize: 16,
        color: theme.colors.secondary

    },

    pics: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 44,
    },

    pic: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgPic: {
        bottom: -4,
        left: 3,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

