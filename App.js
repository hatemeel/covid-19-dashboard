import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import Context from './context/Context';
import Navigator from './navigation/drawerNavigator';
import LoadingIndecator from './components/LoadingIndecator';
import { getAllData } from './actions/actions';

export default function App() {
  const [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    remixicon: require('./assets/fonts/remixicon.ttf'),
  });
  const [state, setState] = useState({
    loading: false,
    loaded: false,
    headerOptions: {},
    globalData: {},
    currentCountryData: {},
    countries: [],
    selectedCountryData: {},
  });

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    try {
      const data = await getAllData();
      setState((prevState) => ({ ...prevState, ...data, loaded: true }));
    } catch (error) {
      console.log(error);
    }

    setState((prevState) => ({ ...prevState, loading: false }));
  };

  return (
    <Context.Provider value={{ state, updateData }}>
      {fontsLoaded ? <Navigator /> : null}
      <LoadingIndecator show={fontsLoaded && state.loading} />
    </Context.Provider>
  );
}
