import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from './starWarsApi';

function StarWarsProvider({ children }) {
  const [statePlanets, setStatePlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '0',
  }]);

  useEffect(() => {
    const chamaApi = async () => {
      const response = await starWarsApi();
      setStatePlanets(response);
    };

    chamaApi();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { statePlanets,
        filterByName,
        setFilterByName,
        filterByNumericValues,
        setfilterByNumericValues,
        setStatePlanets } }
    >
      {children}
    </StarWarsContext.Provider>

  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
