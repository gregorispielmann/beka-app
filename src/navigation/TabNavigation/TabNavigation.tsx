import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigation } from '../StackNavigation';

const Tab = createBottomTabNavigator();

const HomeIcon = () => <Icon name="home" size={24} color="#666" />;

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="StackNavigation"
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
          tabBarActiveTintColor: '#666',
        }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
}
