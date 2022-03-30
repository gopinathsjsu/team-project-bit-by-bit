import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  searchData:null
};

export const searchReducer = createReducer(initialState, {
  SearchUpdate: (state, action) => {
    state.searchData = action.payload;
  },
  clearSearchData: (state) => {
    state.searchData = null;
  }
});