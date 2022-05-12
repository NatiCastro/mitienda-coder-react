import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer';
import BarraNavegacion from './Componentes/NavBar';
import Cart from './Componentes/Cart';
import CartContextProvider from './Componentes/CartContext';
import OrderForm from './Componentes/OrderForm';


function App() {

  let tienda = 'Tienda Mainhdra';
  
  return (
    <>
    <CartContextProvider>

    <BrowserRouter>
         
        <BarraNavegacion />
      
        <h1 className='titulo-principal'>{tienda}</h1>
      
      <Routes>
        
        <Route exact path="/" element={<ItemListContainer />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/orderform" element={<OrderForm />} />

        <Route exact path="/category/:id" element={<ItemListContainer />} />

        <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>

    </CartContextProvider>
    
    </>
  );
}


export default App;
