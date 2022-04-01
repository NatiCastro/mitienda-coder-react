import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import BarraNavegacion from './Componentes/NavBar';



function App() {

  let tienda = 'Tienda Mainhdra';
  
  return (
    <div className="App">
         
         <BarraNavegacion />
      
      <h1 className='titulo-principal'>{tienda}</h1>

      <div className='contenedor-botones'>

      <ItemListContainer/>

       </div>

    </div>

  );
}


export default App;
