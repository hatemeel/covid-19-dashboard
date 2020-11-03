import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import RobotoText from './RobotoText';
import Card from './Card';
import Context from '../context/Context';
import { SvgUri } from 'react-native-svg';
import { splitNumber } from '../utils/utils';
import { globalStyles, margin } from '../styles/global';
import Icon from './Icon';

export default function Sidebar({ navigation }) {
  const {
    state: { currentCountryData, loaded },
    updateData,
  } = useContext(Context);
  const [currentPath, setCurrentPath] = useState('CurrentCountryScreen');

  const menu = [
    {
      icon: 'user-location-line',
      title: 'Current country',
      stack: 'CurrentCountryStack',
      screen: 'CurrentCountryScreen',
    },
    {
      icon: 'global-line',
      title: 'Global',
      stack: 'GlobalCountriesStack',
      screen: 'GlobalCountriesScreen',
    },
  ];

  const navigate = ({ stack, screen }) => {
    setCurrentPath(screen);
    navigation.navigate(stack, { screen });
  };

  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebar__country}>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.sidebar__countryFlag}>
              <SvgUri
                width="100%"
                height="100%"
                uri={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${currentCountryData.countryCode}.svg`}
              />
            </View>

            <View style={styles.sidebar__countryData}>
              <RobotoText style={{ marginBottom: 6 }}>
                {currentCountryData.region} / {currentCountryData.country}
              </RobotoText>
              <RobotoText>
                {splitNumber(currentCountryData.confirmed?.total)}
              </RobotoText>
            </View>
          </View>
        </Card>
      </View>

      <View style={{ flex: 1 }}>
        {menu.map((menuItem) => (
          <TouchableOpacity
            key={Math.random().toString()}
            style={margin('bottom', 15)}
            onPress={() => navigate(menuItem)}
          >
            <View
              style={[
                globalStyles.btn,
                globalStyles.bgLight,
                menuItem.screen === currentPath
                  ? globalStyles.menuItemActive
                  : {},
              ]}
            >
              <Icon name={menuItem.icon} style={[globalStyles.icon]} />
              <RobotoText
                style={[
                  globalStyles.textBold,
                  globalStyles.text_3,
                  margin('left', 15),
                ]}
              >
                {menuItem.title}
              </RobotoText>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={updateData}>
        <View style={[globalStyles.btn, globalStyles.bgPrimary]}>
          <Icon
            name="refresh-line"
            style={[globalStyles.icon, globalStyles.textWhite]}
          />
          <RobotoText
            style={[
              globalStyles.textWhite,
              globalStyles.textBold,
              globalStyles.text_3,
              margin('left', 15),
            ]}
          >
            Refresh data
          </RobotoText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    paddingTop: 30,
  },
  sidebar__country: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  sidebar__countryFlag: {
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: 'hidden',
  },
  sidebar__countryData: {
    marginLeft: 15,
    alignSelf: 'center',
  },
});
