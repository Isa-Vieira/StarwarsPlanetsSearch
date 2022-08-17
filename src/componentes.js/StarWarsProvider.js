import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from './starWarsApi';

function StarWarsProvider({ children }) {
  const [statePlanets, setStatePlanets] = useState([]);

  useEffect(() => {
    const chamaApi = async () => {
      const response = await starWarsApi();
      setStatePlanets(response);
    };

    chamaApi();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { statePlanets } }
    >
      {children}
    </StarWarsContext.Provider>

  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
