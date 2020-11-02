import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import CurrentCountryScreen from '../screens/CurrentCountryScreen';

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="CurrentCountryScreen"
        component={CurrentCountryScreen}
      />
    </Stack.Navigator>
  );
}
