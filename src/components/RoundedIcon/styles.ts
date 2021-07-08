import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.backGround,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    }

});

