import { routerReducer } from 'src';
import { LOCATION_CHANGED } from 'src/action-types';

const mockCreateMatcher = () => () => {
  return {
    params: {},
    result: 'rofl'
  };
};

describe('Router reducer', () => {
  it('adds the pathname to the store', () => {
    const action = {
      type: LOCATION_CHANGED,
      payload: {
        url: '/rofl',
        action: 'PUSH'
      }
    };
    const result = routerReducer({}, mockCreateMatcher)({}, action);

    expect(result).to.deep.equal({
      current: {
        params: {},
        result: 'rofl',
        url: '/rofl'
      },
      previous: undefined,
      historyAction: 'PUSH'
    });
  });

  it('is not affected by other action types', () => {
    const action = {
      type: 'NOT_MY_ACTION_NOT_MY_PROBLEM',
      payload: {
        crazy: 'nonsense'
      }
    };
    const result = routerReducer({}, mockCreateMatcher)({}, action);
    expect(result).to.deep.equal({});
  });
});