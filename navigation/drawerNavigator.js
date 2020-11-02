import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CurrentCountryStack from './currentCountryStack';
import GlobalStack from './globalStack';
import Sidebar from '../components/Sidebar';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CurrentCountryStack"
        drawerContent={() => <Sidebar />}
      >
        <Drawer.Screen
          name="CurrentCountryStack"
          component={CurrentCountryStack}
        />
        <Drawer.Screen name="GlobalStack" component={GlobalStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
