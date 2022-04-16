import React from "react";
import { useState } from "react";
// import '../Estilos/Items.css';
// import { Link } from "react-router-dom";


export default function ItemCount ({stock, OnAdd}) {
     //Indico la cantidad inicial
     const [count, setCount] = useState(1);
    //  const [agregarProducto, setAgregarProducto] = useState([]);

     //Función para sumar cantidad según el stock
     const Suma = () => {
         if (count < stock) {
         setCount(count + 1);
         }
     }    
 
     //Función de resta hasta la cantidad inicial
     const Resta = () => {
         if (count > 1) {
         setCount(count - 1);
         }
     } 
 
    return (
        <>
       <div>
            <div className="contenedor-botones">
                <button className="botones-itemcount" onClick={Resta}>-</button>
                <p className="cantidad-itemcount">{count}</p>
                <button className="botones-itemcount" onClick={Suma}>+</button>
            </div>
            <button className="agregar-carrito" onClick={()=> OnAdd(count)}>Agregar al carrito</button>   
        </div>
        
        </>
    )
}


