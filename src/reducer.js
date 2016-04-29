import { LOCATION_CHANGED } from './action-types';
import { default as matcherFactory } from './create-matcher';

export default (routes, createMatcher = matcherFactory) => {
  const matchRoute = createMatcher(routes);

  return (state = {}, action) => {
    if (action.type === LOCATION_CHANGED) {
      return {
        current: {
          ...matchRoute(action.payload.url),
          url: action.payload.url
        },
        previous: state.current,
        historyAction: action.payload.action
      };
    }
    return state;
  };
};