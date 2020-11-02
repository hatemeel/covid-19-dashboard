import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import CurrentCountryScreen from '../screens/CurrentCountryScreen';
import { Colors } from '../styles/colors';

const Stack = createStackNavigator();

export default function CurrentCountryStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header navigation={navigation} />,
        cardStyle: { backgroundColor: Colors.white },
      }}
    >
      <Stack.Screen
        name="CurrentCountryScreen"
        component={CurrentCountryScreen}
      />
    </Stack.Navigator>
  );
}
