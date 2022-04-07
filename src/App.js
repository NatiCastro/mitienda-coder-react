import React from 'react';
import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer';
import BarraNavegacion from './Componentes/NavBar';



function App() {

  let tienda = 'Tienda Mainhdra';
  
  return (
    <div className="App">
         
         <BarraNavegacion />
      
      <h1 className='titulo-principal'>{tienda}</h1>

      <ItemListContainer/> 
       
      <ItemDetailContainer />

    </div>

  );
}


export default App;
