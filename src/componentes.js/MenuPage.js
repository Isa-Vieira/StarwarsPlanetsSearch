import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

function MenuPage() {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <label htmlFor="filtro">
        Filtro
        <input
          type="text"
          name="filtro"
          data-testid="name-filter"
          onChange={ (event) => setFilterByName(event.target.value) }
        />
      </label>
    </div>
  );
}
export default MenuPage;
