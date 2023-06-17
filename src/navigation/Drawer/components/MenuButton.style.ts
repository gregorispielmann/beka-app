import { StyleSheet } from 'react-native';

export const styles = ({ pressed }: { pressed?: boolean }) =>
  StyleSheet.create({
    menuButton: {
      width: 200,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: pressed ? 'rgba(209, 117, 116, 0.3)' : 'transparent',
    },
    menuText: {
      color: pressed ? 'rgb(209, 117, 116)' : '#fff',
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      fontWeight: '400',
    },
  });
