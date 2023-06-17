import React from 'react';
import { styles } from './BlankView.style';
import { View } from 'react-native';

export function BlankView({ children }: { children?: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}
