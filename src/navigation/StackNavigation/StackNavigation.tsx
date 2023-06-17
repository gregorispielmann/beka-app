import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StartScreen } from '../../screens/Start';
import { NewHomeScreen } from '../../screens/NewHome';

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={StartScreen} />
      <Stack.Screen name="NewHome" component={NewHomeScreen} />
    </Stack.Navigator>
  );
}
