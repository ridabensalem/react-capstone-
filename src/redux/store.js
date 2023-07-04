import { configureStore } from '@reduxjs/toolkit';
import sectorsReducer from './sectors/sectorsSlice';
import companiesReducer from './companies/companiesSlice';
import companyReducer from './company/companySlice';

const store = configureStore({
  reducer: {
    sectors: sectorsReducer,
    companies: companiesReducer,
    company: companyReducer,
  },
});

export default store;
