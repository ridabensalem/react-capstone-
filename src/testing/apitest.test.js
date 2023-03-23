import { fetchCompany, fetchSectors } from '../API/financeAPI';

describe('Async Thunk API Functions', () => {
  let dispatchedActions = [];

  const dispatch = (action) => {
    dispatchedActions.push(action);
  };

  beforeEach(() => {
    dispatchedActions = [];
  });
  test('fetchCompany should return a single company object', async () => {
    const symbol = 'AAPL';
    await fetchCompany(symbol)(dispatch);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0].type).toEqual('company/fetchCompany/pending');
    expect(dispatchedActions[1].type).toEqual('company/fetchCompany/fulfilled');
    expect(dispatchedActions[1].payload).toBeDefined();
    expect(typeof dispatchedActions[1].payload).toBe('object');
  });

  test('fetchSectors should return an array of sectors', async () => {
    await fetchSectors()(dispatch);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0].type).toEqual('sectors/fetchSectors/pending');
    expect(dispatchedActions[1].type).toEqual('sectors/fetchSectors/fulfilled');
    expect(dispatchedActions[1].payload).toBeDefined();
    expect(Array.isArray(dispatchedActions[1].payload)).toBe(true);
  });
});
