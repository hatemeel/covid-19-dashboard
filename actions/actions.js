export const getLocationData = () => {
  return fetch('http://ip-api.com/json').then((r) => r.json());
};

export const getCovidData = () => {
  return fetch('https://api.covid19api.com/summary').then((r) => r.json());
};

export const getCountriesData = ({ country = '' } = {}) => {
  return fetch(
    `https://restcountries.eu/rest/v2/${
      country ? `name/${country}` : 'all?fields=alpha2Code;region;population'
    }`
  ).then((r) => r.json());
};

export const getAllData = () => {
  return Promise.all([
    getLocationData(),
    getCovidData(),
    getCountriesData(),
  ]).then(([locationData, covidData, countriesData]) => {
    const globalData = covidData.Global;
    const countries = mergeData({ covidData, countriesData });
    const currentCountryData = countries.find(
      ({ countryCode }) => countryCode === locationData.countryCode
    );

    return {
      globalData,
      countries,
      currentCountryData,
    };
  });
};

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
