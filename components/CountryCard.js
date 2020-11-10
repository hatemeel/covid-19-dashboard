import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Card from '../components/Card';
import RobotoText from '../components/RobotoText';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';
import { splitNumber } from '../utils/utils';

export default function CountryCard({
  country,
  countryIndex,
  onSelectCountry,
}) {
  return (
    country && (
      <TouchableOpacity
        style={countryIndex ? margin('top', 30) : {}}
        onPress={() => onSelectCountry(country)}
      >
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.countryFlag}>
              <SvgUri width="100%" height="100%" uri={country.flagUrl} />
            </View>

            <View style={styles.countryData}>
              <RobotoText
                style={[globalStyles.text_3, globalStyles.textDanger]}
              >
                {splitNumber(country.confirmed.total)}
              </RobotoText>

              <RobotoText style={globalStyles.text_5}>
                {country.country}
              </RobotoText>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  countryFlag: {
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: 'hidden',
  },
  countryData: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
});
