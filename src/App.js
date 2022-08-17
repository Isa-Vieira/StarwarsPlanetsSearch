import React from 'react';
import './App.css';
import MenuPage from './componentes.js/MenuPage';
import StarWarsProvider from './componentes.js/StarWarsProvider';
import Table from './componentes.js/Table';

function App() {
  return (

    <StarWarsProvider>

      <span>
        Hello, App!
      </span>
      <MenuPage />
      <Table />

    </StarWarsProvider>

  );
}

export default App;
