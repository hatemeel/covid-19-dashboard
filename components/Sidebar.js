import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import RobotoText from './RobotoText';
import Card from './Card';
import Context from '../context/Context';
import { SvgUri } from 'react-native-svg';
import { splitNumber } from '../utils/utils';

export default function Sidebar() {
  const {
    state: { currentCountryData },
  } = useContext(Context);

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
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    paddingTop: 50,
  },
  sidebar__country: {
    paddingHorizontal: 15,
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
