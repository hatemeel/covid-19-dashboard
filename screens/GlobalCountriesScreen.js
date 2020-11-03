import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import Card from '../components/Card';
import Icon from '../components/Icon';
import RobotoText from '../components/RobotoText';
import SearchInput from '../components/SearchInput';
import Context from '../context/Context';
import { globalStyles, margin } from '../styles/global';
import { debounce, splitNumber } from '../utils/utils';

export default function GlobalCountriesScreen({ navigation }) {
  const {
    state: { countries },
  } = useContext(Context);
  const [search, setSearch] = useState('');

  const formatedCountries = () => {
    return countries
      .filter(
        ({ country, countryCode, region }) =>
          country.toLowerCase().startsWith(search.toLowerCase()) ||
          countryCode.toLowerCase().startsWith(search.toLowerCase()) ||
          region.toLowerCase().startsWith(search.toLowerCase())
      )
      .sort((a, b) => b.confirmed.total - a.confirmed.total);
  };

  const selectCountry = ({ countryCode }) => {
    navigation.navigate('GlobalCountriesStack', {
      screen: 'SelectedCountryScreen',
      params: {
        countryCode,
      },
    });
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={styles.searchBar}>
          <SearchInput onChangeText={debounce(setSearch, 500)} />

          <TouchableOpacity style={margin('left', 15)}>
            <Icon
              name="arrow-up-down-line"
              style={[globalStyles.icon, styles.searchBar__icon]}
            />
          </TouchableOpacity>
        </View>

        {formatedCountries().map((country, countryIndex) => (
          <TouchableOpacity
            key={Math.random().toString()}
            style={countryIndex ? margin('top', 30) : {}}
            onPress={() => selectCountry(country)}
          >
            <Card>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.countryFlag}>
                  <SvgUri
                    width="100%"
                    height="100%"
                    uri={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.countryCode}.svg`}
                  />
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
  countryData: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  searchBar: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar__icon: {
    fontSize: 30,
  },
});
