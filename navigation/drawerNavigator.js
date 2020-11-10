import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CurrentCountryStack from './currentCountryStack';
import GlobalCountriesStack from './globalCountriesStack';
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();

function Navigator({ dataLoaded }) {
  return (
    dataLoaded && (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="CurrentCountryStack"
          drawerContent={(props) => <Sidebar {...props} />}
          hideStatusBar={true}
        >
          <Drawer.Screen
            name="CurrentCountryStack"
            component={CurrentCountryStack}
          />
          <Drawer.Screen
            name="GlobalCountriesStack"
            component={GlobalCountriesStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    dataLoaded: state.covidData.dataLoaded,
  };
};

export default connect(mapStateToProps)(Navigator);
