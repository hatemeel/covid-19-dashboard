import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import GlobalCountriesScreen from '../screens/GlobalCountriesScreen';
import SelectedCountryScreen from '../screens/SelectedCountryScreen';
import { Colors } from '../styles/colors';

const Stack = createStackNavigator();

export default function GlobalCountriesStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header navigation={navigation} />,
        cardStyle: { backgroundColor: Colors.white },
      }}
    >
      <Stack.Screen
        name="GlobalCountriesScreen"
        component={GlobalCountriesScreen}
      />
      <Stack.Screen
        name="SelectedCountryScreen"
        options={{
          header: () => (
            <Header
              navigation={navigation}
              back={{
                stack: 'GlobalCountriesStack',
                screen: 'GlobalCountriesScreen',
              }}
            />
          ),
        }}
        component={SelectedCountryScreen}
      />
    </Stack.Navigator>
  );
}
