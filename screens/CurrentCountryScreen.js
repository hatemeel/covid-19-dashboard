import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import CountryHead from '../components/CountryHead';
import CountryStatistics from '../components/CountryStatistics';
import { globalStyles, margin } from '../styles/global';

function CurrentCountryScreen({ currentCountryData }) {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View>
          <CountryHead
            countryData={currentCountryData}
            isCurrentCountry={true}
          />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics countryData={currentCountryData} dataType="new" />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics
            countryData={currentCountryData}
            dataType="total"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    currentCountryData: state.covidData.currentCountryData,
  };
};

export default connect(mapStateToProps)(CurrentCountryScreen);
