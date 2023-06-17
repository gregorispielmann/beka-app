import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './CustomDrawerContent.style';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { MenuButton } from './MenuButton';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles({ insets }).safeArea}>
      <DrawerContentScrollView
        scrollEnabled={false}
        {...props}
        contentContainerStyle={styles({}).container}>
        <View style={styles({}).menuContainer}>
          <Text style={styles({}).menuTitle}>Beka</Text>
          <DrawerItemList {...props} />
          <View style={styles({}).divider} />
          <MenuButton label="Sign Out" />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
