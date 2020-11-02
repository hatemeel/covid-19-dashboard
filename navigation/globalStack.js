import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import GlobalCountriesScreen from '../screens/GlobalCountriesScreen';
import SelectedCountryScreen from '../screens/SelectedCountryScreen';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="GlobalCountriesScreen"
        component={GlobalCountriesScreen}
      />
      <Stack.Screen
        name="SelectedCountryScreen"
        component={SelectedCountryScreen}
      />
    </Stack.Navigator>
  );
}
