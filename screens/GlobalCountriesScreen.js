import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import Card from '../components/Card';
import Icon from '../components/Icon';
import RobotoText from '../components/RobotoText';
import SearchInput from '../components/SearchInput';
import SortModal from '../components/SortModal';
import Context from '../context/Context';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';
import { capitalize, debounce, splitNumber } from '../utils/utils';

export default function GlobalCountriesScreen({ navigation }) {
  const {
    state: { countries },
  } = useContext(Context);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sort, setSort] = useState({
    type: 'confirmed',
    interval: 'total',
    desc: true,
  });

  useEffect(() => {
    setLoaded(false);
    setCountriesToShow(countries);
    setLoaded(true);
  }, []);

  const formatedCountries = () => {
    return countriesToShow
      .filter(
        ({ country, countryCode, region }) =>
          country.toLowerCase().startsWith(search.toLowerCase()) ||
          countryCode.toLowerCase().startsWith(search.toLowerCase()) ||
          region.toLowerCase().startsWith(search.toLowerCase())
      )
      .sort((a, b) => {
        switch (sort.desc) {
          case true:
            return b[sort.type][sort.interval] - a[sort.type][sort.interval];
          case false:
            return a[sort.type][sort.interval] - b[sort.type][sort.interval];
        }
      });
  };

  const selectCountry = ({ countryCode }) => {
    navigation.navigate('GlobalCountriesStack', {
      screen: 'SelectedCountryScreen',
      params: {
        countryCode,
      },
    });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const applySort = (sortSettings) => {
    setSort(sortSettings);
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={styles.searchBar}>
          <SearchInput onChangeText={debounce(setSearch, 500)} />

          <TouchableOpacity style={margin('left', 15)} onPress={openModal}>
            <Icon
              name="arrow-up-down-line"
              style={[globalStyles.icon, styles.searchBar__icon]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.sortSettings}>
          <RobotoText style={[margin('right', 10), globalStyles.text_1]}>
            Sorted by:
          </RobotoText>
          <RobotoText style={globalStyles.text_1}>
            {capitalize(sort.interval)}
          </RobotoText>
          <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
            -
          </RobotoText>
          <RobotoText style={globalStyles.text_1}>
            {capitalize(sort.type)}
          </RobotoText>
          <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
            -
          </RobotoText>
          <RobotoText style={globalStyles.text_1}>
            {sort.desc ? 'Descending' : 'Ascending'}
          </RobotoText>
        </View>

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
          <View>
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
        )}
      </View>

      <SortModal
        modalOpen={modalOpen}
        onCloseModal={closeModal}
        sort={sort}
        onApply={applySort}
      />
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
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar__icon: {
    fontSize: 30,
  },
  sortSettings: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.75,
  },
});
