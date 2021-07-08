import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backGround,
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    textContainer: {
        alignItems: 'center',
        marginTop: 40,
    },

    imageContainer: {
        marginTop: getStatusBarHeight() + 50,
    },

    title: {
        textAlign: 'center',
        lineHeight: 24,
        fontSize: 20,
        color: colors.title,
        fontFamily: fonts.title,
        marginBottom: 16,
    },

    textDescription: {
        textAlign: 'center',
        lineHeight: 24,
        fontSize: 16,
        color: colors.description,
        fontFamily: fonts.text300,
    },

    slider: {
        marginTop: 40,
    },

    buttonBar: {
        width: '100%',
        marginTop: 100,
        marginBottom: getBottomSpace() + 10,
    }
});
