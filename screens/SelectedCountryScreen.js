import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import CountryHead from '../components/CountryHead';
import Context from '../context/Context';
import { globalStyles } from '../styles/global';

export default function SelectedCountryScreen({
  route: {
    params: { countryCode },
  },
}) {
  const { state } = useContext(Context);
  const countryData = state.countries.find(
    (country) => country.countryCode === countryCode
  );

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <CountryHead countryData={countryData} isCurrentCountry={false} />
      </View>
    </ScrollView>
  );
}
