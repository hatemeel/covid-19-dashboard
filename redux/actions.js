import {
  APPLY_SORT_SETTINGS,
  CLOSE_SORT_MODAL,
  FETCH_COVID_DATA,
  FORMAT_COUNTRIES,
  HIDE_LOADER,
  OPEN_SORT_MODAL,
  SELECT_COUNTRY,
  SET_SEARCH_VALUE,
  SHOW_LOADER,
} from './types';

// ---App---
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function openSortModal() {
  return {
    type: OPEN_SORT_MODAL,
  };
}

export function closeSortModal() {
  return {
    type: CLOSE_SORT_MODAL,
  };
}

// ---Covid Data---
export function fetchCovidData() {
  return async (dispatch) => {
    dispatch(showLoader());

    try {
      const [locationData, covidData, countriesData] = await Promise.all([
        getLocationData(),
        getCovidData(),
        getCountriesData(),
      ]);

      const globalData = {
        newConfirmed: covidData.Global.NewConfirmed,
        totalConfirmed: covidData.Global.TotalConfirmed,
        newRecovered: covidData.Global.NewRecovered,
        totalRecovered: covidData.Global.TotalRecovered,
        newDeaths: covidData.Global.NewDeaths,
        totalDeaths: covidData.Global.TotalDeaths,
      };
      const countries = mergeData({ covidData, countriesData });
      const currentCountryData = countries.find(
        ({ countryCode }) => countryCode === locationData.countryCode
      );

      dispatch({
        type: FETCH_COVID_DATA,
        payload: {
          globalData,
          countries,
          currentCountryData,
        },
      });
      dispatch(formatCountries());
    } catch (error) {
      console.log('[ data fetching error ]', error);
    }

    dispatch(hideLoader());
  };
}

export function setSearchValue(searchValue) {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_VALUE,
      payload: searchValue,
    });

    dispatch(formatCountries());
  };
}

export function applySortSettings(sortSettings) {
  return (dispatch) => {
    dispatch({
      type: APPLY_SORT_SETTINGS,
      payload: sortSettings,
    });

    dispatch(formatCountries());
  };
}

export function formatCountries() {
  return {
    type: FORMAT_COUNTRIES,
  };
}

export function selectCountry(countryCode) {
  return {
    type: SELECT_COUNTRY,
    payload: countryCode,
  };
}

// ---HELPERS---
function getLocationData() {
  return fetch('http://ip-api.com/json').then((r) => r.json());
}

function getCovidData() {
  return fetch('https://api.covid19api.com/summary').then((r) => r.json());
}

function getCountriesData() {
  return fetch(
    `https://restcountries.eu/rest/v2/all?fields=alpha2Code;region;population`
  ).then((r) => r.json());
}

function mergeData({ covidData: { Countries }, countriesData }) {
  try {
    return Countries.map((countryCovidData) => {
      const countryData = countriesData.find(
        ({ alpha2Code }) => alpha2Code === countryCovidData.CountryCode
      );

      return {
        country: countryCovidData.Country,
        countryCode: countryCovidData.CountryCode,
        region: countryData.region,
        population: countryData.population,
        flagUrl: `https://purecatamphetamine.github.io/country-flag-icons/1x1/${countryCovidData.CountryCode}.svg`,
        confirmed: {
          new: countryCovidData.NewConfirmed,
          total: countryCovidData.TotalConfirmed,
        },
        recovered: {
          new: countryCovidData.NewRecovered,
          total: countryCovidData.TotalRecovered,
        },
        deaths: {
          new: countryCovidData.NewDeaths,
          total: countryCovidData.TotalDeaths,
        },
      };
    });
  } catch (error) {
    return [];
  }
}
