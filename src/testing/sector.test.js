import sectorsReducer from '../redux/sectors/sectorsSlice';
import { fetchSectors } from '../API/financeAPI';

describe('sectorsSlice', () => {
  test('should update state with fetched sectors', () => {
    const initialState = { sectors: [] };
    const action = {
      type: fetchSectors.fulfilled.type,
      payload: [{ id: 1, name: 'Technology' }, { id: 2, name: 'Healthcare' }],
    };
    const expectedState = { sectors: action.payload };

    const actualState = sectorsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
