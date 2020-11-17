import {
  APPLY_SORT_SETTINGS,
  FETCH_COVID_DATA,
  FORMAT_COUNTRIES,
  SELECT_COUNTRY,
  SET_SEARCH_VALUE,
} from './types';

import en from '../i18n/en.json';
import uk from '../i18n/uk.json';

const locales = {
  en,
  uk,
};

const initialState = {
  dataLoaded: false,
  globalData: null,
  currentCountryData: null,
  countries: null,
  formatedCountries: [],
  searchValue: '',
  sortSettings: {
    type: 'confirmed',
    interval: 'total',
    desc: true,
  },
  selectedCountryData: null,
};

export const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return { ...state, ...action.payload, dataLoaded: true };

    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload.trim() };

    case APPLY_SORT_SETTINGS:
      return { ...state, sortSettings: action.payload };

    case FORMAT_COUNTRIES:
      return {
        ...state,
        formatedCountries: state.countries
          .filter(
            ({
              country,
              countryCode,
              region,
              countryTranslations,
              regionTranslations,
            }) =>
              country
                .toLowerCase()
                .startsWith(state.searchValue.toLowerCase()) ||
              countryCode
                .toLowerCase()
                .startsWith(state.searchValue.toLowerCase()) ||
              region
                .toLowerCase()
                .startsWith(state.searchValue.toLowerCase()) ||
              countryTranslations.find((cname) =>
                cname.toLowerCase().startsWith(state.searchValue.toLowerCase())
              ) ||
              regionTranslations.find((rname) =>
                rname.toLowerCase().startsWith(state.searchValue.toLowerCase())
              )
          )
          .sort((a, b) => {
            switch (state.sortSettings.desc) {
              case true:
                return (
                  b[state.sortSettings.type][state.sortSettings.interval] -
                  a[state.sortSettings.type][state.sortSettings.interval]
                );
              case false:
                return (
                  a[state.sortSettings.type][state.sortSettings.interval] -
                  b[state.sortSettings.type][state.sortSettings.interval]
                );
            }
          }),
      };

    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountryData:
          state.countries.find(
            ({ countryCode }) => countryCode === action.payload
          ) || null,
      };

    default:
      return state;
  }
};
