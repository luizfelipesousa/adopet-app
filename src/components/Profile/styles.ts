import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        marginTop: getStatusBarHeight() + 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.backGround,
        paddingHorizontal: 24,
        marginBottom: 20,
    },

    personInfo: {
        flexDirection: 'row',
    },

    personAddress: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },

    adress: {
        fontSize: 14,
    },

    avatar: {
        width: 36,
        height: 36,
        alignItems: 'center',
        borderRadius: 100,
    },

    pin: {
        width: 9,
        height: 9,
        marginLeft: 5,
    },

    notification: {
        width: 18,
        height: 18,
        alignItems: 'center',
        borderRadius: 100,
    }

});

