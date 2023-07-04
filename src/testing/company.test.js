import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchCompanies from '../API/financeAPI';
import companiesReducer, { setFilter } from '../redux/companies/companiesSlice';

const mockStore = configureMockStore([thunk]);

describe('companiesSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      companies: [],
      filter: '',
    });
  });

  it('company should set the filter correctly', () => {
    const filter = 'testFilter';
    store.dispatch(setFilter(filter));
    expect(store.getActions()).toEqual([{ type: 'companies/setFilter', payload: filter }]);
  });

  it(' company should handle fetchCompanies.pending', () => {
    const action = { type: fetchCompanies.pending.type };
    const nextState = companiesReducer(undefined, action);
    expect(nextState).toEqual({
      companies: [],
      filter: '',
    });
  });

  it(' company should handle fetchCompanies.fulfilled', () => {
    const action = {
      type: fetchCompanies.fulfilled.type,
      payload: [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }],
    };
    const nextState = companiesReducer(undefined, action);
    expect(nextState).toEqual({
      companies: [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }],
      filter: '',
    });
  });
});
