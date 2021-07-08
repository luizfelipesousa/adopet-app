import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({

    customButton: {
        borderRadius: 32,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        width: '100%',
        marginBottom: getBottomSpace() + 10,
        opacity: 0.7,

        //shadow style
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    textButton: {
        fontSize: 16,
        fontFamily: fonts.text400,
        color: colors.white,
    }

});

