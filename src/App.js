import React from 'react';
import './App.css';
import MenuPage from './componentes.js/MenuPage';
import StarWarsProvider from './componentes.js/StarWarsProvider';
import Table from './componentes.js/Table';
import ValoresNumericos from './componentes.js/ValoresNumericos';

function App() {
  return (

    <StarWarsProvider>

      <span>
        Hello, App!
      </span>
      <MenuPage />
      <ValoresNumericos />
      <Table />

    </StarWarsProvider>

  );
}

export default App;
