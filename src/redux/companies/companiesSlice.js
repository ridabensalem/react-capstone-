import { createSlice } from '@reduxjs/toolkit';
import fetchCompanies from '../../API/financeAPI';

const initialState = {
  companies: [],
  filter: '',
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => (
      {
        ...state,
        filter: payload,
      }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => (
      {
        ...state,
        companies: [],
      }
    ));
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }) => (
      {
        ...state,
        companies: payload,
      }
    ));
  },
});

export const { setFilter } = companiesSlice.actions;
export default companiesSlice.reducer;
