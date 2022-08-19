import React, { useState, useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function ValoresNumericos() {
  const { filterByNumericValues,
    setfilterByNumericValues,
    setStatePlanets,
    statePlanets } = useContext(StarWarsContext);
  const [filterStateValue, setFilterValue] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const handleChange = ({ target }) => {
    /* console.log(target.name); */
    const objetoAnterior = [...filterByNumericValues];
    objetoAnterior[0] = { ...objetoAnterior[0], [target.name]: target.value };
    setfilterByNumericValues(objetoAnterior);
  };
  const buttonFilterOnClick = () => {
    const { comparison, value, column } = filterByNumericValues[0];
    const newArray = [];
    const newObject = [...filterByNumericValues];
    const newArrayOptions = [...filterStateValue];
    const removeFilter = filterStateValue.indexOf(column);
    newArrayOptions.splice(removeFilter, 1);
    /* console.log(newArrayOptions); */
    newObject[0] = { ...newObject[0], column: newArrayOptions[0] };
    setFilterValue(newArrayOptions);
    setfilterByNumericValues(newObject);

    if (comparison === 'maior que') {
      statePlanets.forEach((element) => {
        if (Number(element[column]) > Number(value)) {
          newArray.push(element);
        }
      });
    }
    if (comparison === 'menor que') {
      statePlanets.forEach((element) => {
        if (Number(element[column]) < Number(value)) {
          newArray.push(element);
        }
      });
    }
    if (comparison === 'igual a') {
      statePlanets.forEach((element) => {
        if (Number(element[column]) === Number(value)) {
          newArray.push(element);
        }
      });
    }
    setStatePlanets(newArray);
  };

  return (
    <form>
      <select name="column" onChange={ handleChange } data-testid="column-filter">

        { filterStateValue.map((param) => (
          <option key={ param } value={ param }>{ param }</option>))}

      </select>
      <select name="comparison" onChange={ handleChange } data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="value"
        value={ filterByNumericValues[0].value }
        onChange={ handleChange }
        data-testid="value-filter"
      />

      <button
        name="acionarFiltro"
        type="button"
        data-testid="button-filter"
        onClick={ buttonFilterOnClick }
      >
        Filtrar
      </button>

    </form>
  );
}
export default ValoresNumericos;
