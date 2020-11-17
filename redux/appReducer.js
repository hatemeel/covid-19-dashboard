import { translate } from '../i18n';
import {
  CLOSE_SORT_MODAL,
  HIDE_LOADER,
  OPEN_SORT_MODAL,
  SET_TRANSLATOR,
  SHOW_LOADER,
} from './types';

const initialState = {
  loading: false,
  sortModalOpen: false,
  lang: 'en',
  translate: translate(),
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    case OPEN_SORT_MODAL:
      return { ...state, sortModalOpen: true };

    case CLOSE_SORT_MODAL:
      return { ...state, sortModalOpen: false };

    case SET_TRANSLATOR:
      return {
        ...state,
        translate: translate(action.payload),
        lang: action.payload,
      };

    default:
      return state;
  }
};
