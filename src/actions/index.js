import * as c from './ActionTypes';

export const getDestinationsSuccess = (destinations) => ({
  type: c.GET_DESTINATIONS_SUCCESS,
  destinations
});

export const getDestinationsFailure = (error) => ({
  type: c.GET_DESTINATIONS_FAILURE,
  error
});