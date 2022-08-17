import React from 'react';
import './App.css';
import StarWarsProvider from './componentes.js/StarWarsProvider';
import Table from './componentes.js/Table';

function App() {
  return (

    <StarWarsProvider>

      <span>
        Hello, App!
      </span>
      <Table />

    </StarWarsProvider>

  );
}

export default App;
