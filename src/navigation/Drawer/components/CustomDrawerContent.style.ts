import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const styles = ({ insets }: { insets?: EdgeInsets }) =>
  StyleSheet.create({
    safeArea: {
      marginTop: insets?.top,
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: '#18122e',
    },
    menuContainer: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    menuTitle: {
      color: '#fff',
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'bold',
      fontSize: 21,
      paddingVertical: 20,
    },
    divider: {
      width: 200,
      marginVertical: 30,
      backgroundColor: 'rgba(255,255,255,0.3)',
      height: 1,
    },
  });
