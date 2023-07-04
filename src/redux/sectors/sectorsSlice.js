import { createSlice } from '@reduxjs/toolkit';
import { fetchSectors } from '../../API/financeAPI';

const initialState = {
  sectors: [],
};

const sectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSectors.fulfilled, (state, { payload }) => (
      {
        ...state,
        sectors: payload,
      }
    ));
  },
});

export default sectorsSlice.reducer;
