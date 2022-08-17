import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function Table() {
  const { statePlanets } = useContext(StarWarsContext);
  console.log(statePlanets);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {statePlanets.map((param) => (
          <tr key={ param.name }>
            <td>{param.name}</td>
            <td>{param.rotation_period }</td>
            <td>{param.orbital_period }</td>
            <td>{param.diameter}</td>
            <td>{param.climate}</td>
            <td>{param.gravity}</td>
            <td>{param.terrain}</td>
            <td>{param.surface_water}</td>
            <td>{param.population}</td>
            <td>{param.films}</td>
            <td>{param.created}</td>
            <td>{param.edited}</td>
            <td>{param.url}</td>
          </tr>

        ))}
      </tbody>
    </table>

  );
}
export default Table;
