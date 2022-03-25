import React from 'react';
import './App.css';
import BarraNavegacion from './Componentes/NavBar';



function App() {
  let tienda = 'Tienda Mainhdra';
  return (
    <div className="App">
         
         <BarraNavegacion />
      
      <h1 className='titulo-principal'>{tienda}</h1>

    </div>
  );
}


export default App;
