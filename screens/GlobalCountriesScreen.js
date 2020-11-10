import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CountryCard from '../components/CountryCard';
import RobotoText from '../components/RobotoText';
import SearchBar from '../components/SearchBar';
import SortIndecators from '../components/SortIndecators';
import SortModal from '../components/SortModal';
import { openSortModal, selectCountry } from '../redux/actions';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';

function GlobalCountriesScreen({ navigation, countries, setSelectedCountry }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const selectCountry = ({ countryCode }) => {
    setSelectedCountry(countryCode);

    navigation.navigate('SelectedCountryScreen');
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {!loaded && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <ActivityIndicator size="large" color={Colors.loaderColor} />

            <RobotoText style={margin('top', 20)}>Loading...</RobotoText>
          </View>
        )}

        {loaded && (
          <>
            <SearchBar />

            <SortIndecators />

            <View>
              {countries.map((country, countryIndex) => (
                <CountryCard
                  key={Math.random().toString()}
                  country={country}
                  countryIndex={countryIndex}
                  onSelectCountry={selectCountry}
                />
              ))}
            </View>
          </>
        )}
      </View>

      <SortModal />
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.covidData.formatedCountries,
  };
};

const mapDispatchToProps = {
  openModal: openSortModal,
  setSelectedCountry: selectCountry,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalCountriesScreen);
