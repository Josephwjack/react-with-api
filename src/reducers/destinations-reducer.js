import * as c from '../actions/ActionTypes';

const destinationsReducer = (state, action) => {
  switch (action.type) {
    case c.GET_DESTINATIONS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        destinations: action.destinations
      };
      case c.GET_DESTINATIONS_FAILURE:
        return {
          ...state,
          isLoaded: true,
          error: action.error
        };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default destinationsReducer;