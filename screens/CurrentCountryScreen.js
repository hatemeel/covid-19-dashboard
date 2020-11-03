import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import CountryHead from '../components/CountryHead';
import CountryStatistics from '../components/CountryStatistics';
import Context from '../context/Context';
import { globalStyles, margin } from '../styles/global';

export default function CurrentCountryScreen() {
  const { state } = useContext(Context);
  const countryData = state.currentCountryData;

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View>
          <CountryHead countryData={countryData} isCurrentCountry={true} />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics countryData={countryData} dataType="new" />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics countryData={countryData} dataType="total" />
        </View>
      </View>
    </ScrollView>
  );
}
