import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import CountryHead from '../components/CountryHead';
import CountryStatistics from '../components/CountryStatistics';
import { globalStyles, margin } from '../styles/global';

function SelectedCountryScreen({ selectedCountryData }) {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View>
          <CountryHead
            countryData={selectedCountryData}
            isCurrentCountry={false}
          />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics countryData={selectedCountryData} dataType="new" />
        </View>

        <View style={margin('top', 30)}>
          <CountryStatistics
            countryData={selectedCountryData}
            dataType="total"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCountryData: state.covidData.selectedCountryData,
  };
};

export default connect(mapStateToProps)(SelectedCountryScreen);
