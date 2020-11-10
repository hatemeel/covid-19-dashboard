import React from 'react';
import { useFonts } from 'expo-font';
import Navigator from './navigation/drawerNavigator';
import LoadingIndecator from './components/LoadingIndecator';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { fetchCovidData } from './redux/actions';

export default function App() {
  const [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    remixicon: require('./assets/fonts/remixicon.ttf'),
  });

  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  store.dispatch(fetchCovidData());

  return (
    (fontsLoaded && (
      <Provider store={store}>
        <Navigator />
        <LoadingIndecator />
      </Provider>
    )) ||
    null
  );
}
