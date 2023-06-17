import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './MenuButton.style';

export function MenuButton({ label }: { label: string }) {
  return (
    <Pressable style={({ pressed }) => styles({ pressed }).menuButton}>
      {({ pressed }) => (
        <Text style={styles({ pressed }).menuText}>{label}</Text>
      )}
    </Pressable>
  );
}
