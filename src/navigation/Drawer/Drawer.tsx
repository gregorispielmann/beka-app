import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './components/CustomDrawerContent';
import { YourCart } from '../../screens/YourCart';
import { YourOrders } from '../../screens/YourOrders';
import { Favourites } from '../../screens/Favourites';
import { TabNavigation } from '../TabNavigation';

const menuOptions = {
  drawerInactiveTintColor: 'white',
  drawerActiveTintColor: 'rgb(209, 117, 116)',
};

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Start"
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: 'white',
          borderBottomColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#666',
        headerTitleStyle: {
          fontFamily: 'Montserrat-Regular',
          fontWeight: '400',
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#666',
        },
        overlayColor: 'transparent',
        drawerType: 'slide',
        drawerActiveBackgroundColor: 'rgba(209, 117, 116, 0.3)',
        drawerLabelStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          fontWeight: '400',
        },
        drawerItemStyle: {
          width: 200,
          paddingHorizontal: 5,
          borderRadius: 10,
        },
      }}>
      <Drawer.Screen
        name="TabNavigation"
        options={{ ...menuOptions, title: 'Start' }}
        component={TabNavigation}
      />
      <Drawer.Screen
        name="Your Cart"
        options={menuOptions}
        component={YourCart}
      />
      <Drawer.Screen
        name="Favourites"
        options={menuOptions}
        component={Favourites}
      />
      <Drawer.Screen
        name="Your Orders"
        options={menuOptions}
        component={YourOrders}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
