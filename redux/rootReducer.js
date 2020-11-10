import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { covidDataReducer } from './covidDataReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  covidData: covidDataReducer,
});
