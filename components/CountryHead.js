import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { globalStyles, margin } from '../styles/global';
import { splitNumber } from '../utils/utils';
import Card from './Card';
import RobotoText from './RobotoText';

export default function CountryHead({ countryData, isCurrentCountry }) {
  return (
    <View>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.country__flag}>
            <SvgUri
              width="100%"
              height="100%"
              uri={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${countryData.countryCode}.svg`}
            />
          </View>

          <View style={styles.country__data}>
            <View style={margin('bottom', 10)}>
              <RobotoText style={globalStyles.text_1}>
                {isCurrentCountry ? 'Current country' : 'Country'}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {countryData.country}
              </RobotoText>
            </View>

            <View style={margin('bottom', 10)}>
              <RobotoText style={globalStyles.text_1}>
                {isCurrentCountry ? 'Current region' : 'Region'}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {countryData.region}
              </RobotoText>
            </View>

            <View>
              <RobotoText style={globalStyles.text_1}>
                Total confirmed
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {splitNumber(countryData.confirmed?.total)}
              </RobotoText>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  country__flag: {
    width: 90,
    height: 90,
    borderRadius: 90,
    overflow: 'hidden',
  },
  country__data: {
    marginLeft: 25,
  },
});
