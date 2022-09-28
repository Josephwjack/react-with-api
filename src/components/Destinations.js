import React, { useEffect, useReducer } from 'react';
import destinationsReducer from '../reducers/destinations-reducer';
import { getDestinationsFailure, getDestinationsSuccess} from '../actions/index';

const initialState = {
  isLoaded: false,
  destinations: [],
  error: null
};

function Destinations() {
  const [state, dispatch] = useReducer(destinationsReducer, initialState);

  // https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
  useEffect(() => {
    fetch(`http://localhost:5000/api/destinations/`)
      .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
      })
      .then((jsonifiedResponse) => {
        const action = getDestinationsSuccess(jsonifiedResponse)
        dispatch(action);
      })
      .catch((error) => {
        const action = getDestinationsFailure(error.message)
        dispatch(action);
      });
    }, [])

     // we destructure error, isLoaded, and topStories from the state variable.
    const { error, isLoaded, destinations } = state;

    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1>Destinations</h1>
          <div>
            {destinations.map((destination, index) =>
              <div key={index}>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
}
export default Destinations;