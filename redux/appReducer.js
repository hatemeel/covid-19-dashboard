import {
  CLOSE_SORT_MODAL,
  HIDE_LOADER,
  OPEN_SORT_MODAL,
  SHOW_LOADER,
} from './types';

const initialState = {
  loading: false,
  sortModalOpen: false,
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

    default:
      return state;
  }
};
