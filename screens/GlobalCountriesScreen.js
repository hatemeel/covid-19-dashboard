import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import RobotoText from '../components/RobotoText';
import Context from '../context/Context';
import { globalStyles } from '../styles/global';

export default function GlobalCountriesScreen() {
  const {
    state: { countries },
  } = useContext(Context);

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {countries.map((country) => (
          <View key={Math.random().toString()}>
            <View style={styles.countryFlag}>
              <SvgUri
                width="100%"
                height="100%"
                uri={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.countryCode}.svg`}
              />
            </View>
            <RobotoText>{country.country}</RobotoText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countryFlag: {
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: 'hidden',
  },
});
