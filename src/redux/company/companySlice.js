import { createSlice } from '@reduxjs/toolkit';
import { fetchCompany } from '../../API/financeAPI';

const initialState = {
  company: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompany.pending, (state) => (
      {
        ...state,
        company: [],
      }
    ));
    builder.addCase(fetchCompany.fulfilled, (state, { payload }) => (
      {
        ...state,
        company: payload,
      }
    ));
  },
});

export default companySlice.reducer;
