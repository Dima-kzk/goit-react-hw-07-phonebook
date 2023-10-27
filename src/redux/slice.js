import { createSlice } from '@reduxjs/toolkit';
import {
  addContactReducer,
  deleteContactReducer,
  fetchContactsReducer,
} from './reducers';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    fetchContactsReducer(builder);
    deleteContactReducer(builder);
    addContactReducer(builder);
  },
});

export const { filterByName } = slice.actions;
export const reducer = slice.reducer;
